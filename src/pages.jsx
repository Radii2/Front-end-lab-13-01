import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About </Link>
        <Link to="services">Services </Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h1>[Services]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contacts]</h1>
      <nav>
        <Link to="us">English </Link>
        <Link to="pl">Polski </Link>
        <Link to="de">Deutsch </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function EnglishContact() {
  return (
    <div>
      <h1>[English contact]</h1>
    </div>
  );
}
export function PolishContact() {
  return (
    <div>
      <h1>[Polski kontakt]</h1>
    </div>
  );
}
export function GermanContact() {
  return (
    <div>
      <h1>[Deutsch kontakt]</h1>
    </div>
  );
}
export function Error404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Nie znaleziono elementu: {location.pathname}</h1>
    </div>
  );
}
