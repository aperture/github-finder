import { FaGithub } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-neutral text-neutral-content'>
      <FaGithub className='inline text-6xl' />
      Copyright &copy; {footerYear}
    </footer>
  );
}
export default Footer;
