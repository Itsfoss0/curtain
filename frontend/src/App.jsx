import BrevoConversations from './components/chat/BrevoConversations.component';
import AppRoutes from './routes/AppRoutes.route';

const App = () => {
  return (
    <div className='font-sans'>
      <AppRoutes />
      <BrevoConversations />
    </div>
  );
};

export default App;
