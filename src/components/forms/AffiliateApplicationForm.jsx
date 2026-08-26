import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from '../../hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid WhatsApp number.'),
  company: z.string().optional(),
  affiliateType: z.string().min(1, 'Please select your primary audience.'),
  platformLink: z.string().url('Please enter a valid URL (e.g., https://...).').or(z.literal('')),
  expectedReferrals: z.string().min(1, 'Please estimate your monthly referrals.'),
  promotionStrategy: z.string().min(10, 'Please provide a brief explanation.'),
});

export default function AffiliateApplicationForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      affiliateType: '',
      platformLink: '',
      expectedReferrals: '',
      promotionStrategy: '',
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);

    try {
      let apiUrl = process.env.REACT_APP_API_URL || 'https://portal.scaleby.in/api/v1';
      apiUrl = apiUrl.replace(/\/+$/, ''); // Remove trailing slashes
      if (apiUrl.endsWith('/api')) apiUrl += '/v1';
      const response = await fetch(`${apiUrl}/platform/affiliate/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: 'Application Submitted!',
        description: 'We have received your application and will be in touch shortly.',
        variant: 'default',
      });

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: 'Submission Failed',
        description: 'There was an issue submitting your application. Please try again.',
        variant: 'destructive',
      });
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Thank you for your interest in the ScaleBy Affiliate Program. Our team will review your details and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Agency Name</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="affiliateType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Audience <span className="text-red-500">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="content_creator">Content Creator / Influencer</SelectItem>
                    <SelectItem value="agency">Marketing Agency</SelectItem>
                    <SelectItem value="consultant">Business Consultant / Coach</SelectItem>
                    <SelectItem value="customer">Existing ScaleBy Customer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expectedReferrals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Monthly Referrals <span className="text-red-500">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-5">1 - 5 referrals</SelectItem>
                    <SelectItem value="5-20">5 - 20 referrals</SelectItem>
                    <SelectItem value="20-50">20 - 50 referrals</SelectItem>
                    <SelectItem value="50+">50+ referrals</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="platformLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Platform / Website Link</FormLabel>
              <FormControl>
                <Input placeholder="https://instagram.com/yourprofile" {...field} />
              </FormControl>
              <FormDescription>
                Link to your main social profile, YouTube channel, or agency website.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="promotionStrategy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How do you plan to promote ScaleBy? <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="E.g., I will recommend it to my agency clients, or I will create YouTube tutorials..."
                  className="min-h-[100px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold min-w-[150px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
