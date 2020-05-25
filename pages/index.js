import './index.css';
import Card from './Card';

export default () => (
  <div className='App'>
    <header className='App-header'>
      <img src='/public/logo.png' className='static-logo' alt='logo' />
    </header>
    <div className='Grid'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
