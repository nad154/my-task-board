import {icons} from "lucide-react" 

interface SetIconProps { 
    iconName: keyof typeof icons;
    size?: number; 
    color?: string; 
    className?: string; 
}

export default function setIcon({ iconName, ...props }: SetIconProps) {
  const IconComponent = icons[iconName];

  if (!IconComponent) {
    return null; // Fallback if name doesn't exist
  }

  return <IconComponent {...props} />;
}
