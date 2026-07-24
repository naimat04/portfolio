import * as React from 'react'; import { Slot } from '@radix-ui/react-slot'; import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const variants=cva('inline-flex items-center justify-center gap-2 border px-4 py-2 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'border-[var(--pine)] bg-[var(--pine)] text-[var(--paper)] hover:bg-[var(--ink)]',outline:'border-[var(--line)] hover:bg-[var(--wash)]'}},defaultVariants:{variant:'default'}});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof variants>{asChild?:boolean}
export const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({className,variant,asChild=false,...props},ref)=>{const Comp=asChild?Slot:'button';return <Comp className={cn(variants({variant}),className)} ref={ref} {...props}/>});Button.displayName='Button';
