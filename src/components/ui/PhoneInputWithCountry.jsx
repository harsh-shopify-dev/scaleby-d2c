import React from 'react';
import { COUNTRIES, getCountryByDialCode } from '../../data/countries';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { Info } from 'lucide-react';

export function PhoneInputWithCountry({
  value,
  countryCode,
  onPhoneChange,
  onCountryChange,
  onBlur,
  error,
  infoText
}) {
  const selectedCountry = getCountryByDialCode(countryCode) || COUNTRIES[1]; // Default IN

  return (
    <div className={`flex w-full items-center rounded-xl border transition-all overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500/30 ${error ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50' : 'border-slate-300 bg-white'}`}>
      <Select value={countryCode} onValueChange={onCountryChange}>
        <SelectTrigger className="w-[110px] h-[44px] border-0 rounded-none bg-transparent shadow-none focus:ring-0 px-3.5 outline-none">
          <SelectValue placeholder="Code">
            <span className="flex items-center gap-1.5">
              <span>{selectedCountry.flag}</span>
              <span>{selectedCountry.dialCode}</span>
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {COUNTRIES.map((c) => (
            <SelectItem key={c.code} value={c.dialCode}>
              <span className="flex items-center gap-2">
                <span className="text-base">{c.flag}</span>
                <span className="font-medium">{c.dialCode}</span>
                <span className="text-slate-500 text-sm truncate max-w-[120px]">{c.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="h-6 w-px bg-slate-200 shrink-0 mx-1" />

      <div className="relative flex-1">
        <input
          type="tel"
          value={value}
          placeholder="9876543210"
          maxLength="10"
          onBlur={onBlur}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, '');
            onPhoneChange(val);
          }}
          className="w-full h-[44px] border-0 bg-transparent px-3.5 pr-10 text-sm focus:outline-none focus:ring-0 outline-none"
        />

        {infoText && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger type="button" className="cursor-help" tabIndex={-1}>
                  <Info className={`h-4 w-4 ${error ? 'text-red-400' : 'text-slate-400 hover:text-slate-600'}`} />
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-gray-100/80 backdrop-blur-sm text-gray-600 font-medium text-xs px-3 py-2 rounded-lg">
                  {infoText}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </div>
  );
}
