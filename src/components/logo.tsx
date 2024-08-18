import LogoImage from '../images/texas.png';

export function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <a href="/">
        <img className="h-8 w-auto rounded-md" src={LogoImage} title="Texas ASL" alt="Texas ASL" />
      </a>
    </div>
  );
}
