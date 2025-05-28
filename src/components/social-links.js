import LinkedInIcon from '@/public/linkedin-icon.svg';
import FacebookIcon from '@/public/facebook-icon.svg';
import XIcon from '@/public/x-icon.svg';
import { SOCIAL_LINKS as SOCIAL_LINKS_CONSTANTS } from '@/constants';

const getSocialIcon = id => {
  switch (id) {
    case 'linkedin':
      return LinkedInIcon;
    case 'facebook':
      return FacebookIcon;
    case 'x':
      return XIcon;
    default:
      return XIcon;
  }
};

export const SOCIAL_LINKS = ({ className }) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {SOCIAL_LINKS_CONSTANTS.map(social => {
        const Icon = getSocialIcon(social.id);
        return (
          <a href={social.url} key={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.alt}>
            <Icon className="w-6 h-6 fill-current" />
          </a>
        );
      })}
    </div>
  );
};
