import { Info, MessageCircle, Bot } from 'lucide-react';

export default function MessageCharges() {
  return (
    <div id="meta-charges" className="mt-12 max-w-3xl mx-auto scroll-mt-24">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              Meta WhatsApp Message Charges
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Zero markup.</span> Direct bill to Meta. You only pay for what you use based on conversation categories.
            </p>
            
            <div className="mt-4 flex items-start gap-2 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
              <Bot className="h-4 w-4 text-emerald-700 mt-0.5 shrink-0" />
              <p className="text-sm text-emerald-800">
                <span className="font-semibold">AI Assistant:</span> AI message charges apply as per the selected model (e.g., Gemini, OpenAI, Claude).
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto min-w-[240px] bg-white rounded-2xl p-5 border border-slate-200 shadow-soft">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Per Template Message</span>
              <Info className="h-3.5 w-3.5 text-slate-400" />
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Marketing</span>
                <span className="font-bold text-slate-900">₹0.863</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Utility</span>
                <span className="font-bold text-slate-900">₹0.115</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Authentication</span>
                <span className="font-bold text-slate-900">₹0.115</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="text-slate-600">Service</span>
                <span className="font-bold text-slate-900">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
