import * as React from 'react';

// Import Layout Component
import LoginPageLayout from '../components/layout/LoginPageLayout';

// Import Feature Component
import LoginForm from '../components/Login/LoginForm';

/**
 * The main index page for the application, which serves as the login page.
 * It utilizes the LoginPageLayout to center the content vertically and horizontally
 * and renders the core LoginForm component.
 */
const IndexPage: React.FC = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
};

export default IndexPage;
