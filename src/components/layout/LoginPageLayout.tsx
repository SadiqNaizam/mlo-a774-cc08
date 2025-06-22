import * as React from 'react';
import { cn } from '@/lib/utils';

interface LoginPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A full-screen layout component that centers its children vertically and horizontally.
 * It applies the primary background color and provides padding for spacing.
 */
const LoginPageLayout: React.FC<LoginPageLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default LoginPageLayout;
