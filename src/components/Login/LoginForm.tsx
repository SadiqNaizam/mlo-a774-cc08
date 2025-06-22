import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define the validation schema using Zod
const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize the form with react-hook-form and Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle success/error states here
    }, 2000);
  };

  const UnderlineInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => {
    return (
      <Input
        className={cn(
          'border-0 border-b rounded-none px-0 shadow-none',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-primary',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  });
  UnderlineInput.displayName = 'UnderlineInput';

  return (
    <Card className={cn('w-full max-w-sm bg-card shadow-md rounded-md border-0', className)}>
      <CardHeader className="text-center space-y-1 p-6">
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                  <FormControl>
                    <UnderlineInput type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="pt-2">
                  <FormLabel className="text-muted-foreground">Password</FormLabel>
                  <FormControl>
                    <UnderlineInput type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
                <Button variant="link" type="button" className="p-0 h-auto text-sm text-primary font-normal">
                    Forgot Password
                </Button>
            </div>

            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center p-6 pt-2">
        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{\' '}
          <Button variant="link" type="button" className="p-0 h-auto text-sm text-primary font-medium">
            SignUp
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
