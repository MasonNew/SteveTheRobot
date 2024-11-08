'use client';

import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function CopyButton() {
  const { toast } = useToast();

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText('Placemaker, adding when live');
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        duration: 2000,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 hover:bg-white/10 rounded-full transition-colors"
      aria-label="Copy contract address"
    >
      <Copy className="w-4 h-4" />
    </button>
  );
}