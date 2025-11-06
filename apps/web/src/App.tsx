import { useEffect } from 'react';
import { LoginView } from './components/auth/login';
import { InboxView } from './components/inbox/inbox-view';
import { useAuthStore } from './stores/auth.store';
function App() {
const { user, isLoading, checkAuth } = useAuthStore();
useEffect(() => { checkAuth(); }, [checkAuth]);
if (isLoading) return (<div>Loading...</div>);
if (!user) return <LoginView />;
return <InboxView />;
}
export default App;