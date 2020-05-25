import './index.css';
import Card from '../pages/components/Card';

export default () => (
  <div className='App'>
    <header className='App-header'>
      <img src='/static/logo.png' className='static-logo' alt='logo' />
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
