// import { useAuthenticator } from '@aws-amplify/ui-react';

// export function Profile() {
//   const { user, authStatus } = useAuthenticator((context) => [context.user]);
//   console.dir(user);
//   const signedIn = authStatus === 'authenticated';
//   const loginId = user?.signInDetails?.loginId || '';
//   const source = (!signedIn) ? 'profile.jpg' : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
//   return (
//     <img
//       className='h-7 w-7 rounded-full'
//       title={signedIn ? loginId : 'Sign In'}
//       alt={authStatus}
//       src={source}
//     />
//   );
// }
