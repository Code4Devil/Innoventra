import React from 'react';
import { 
  Cloud, 
  Brain, 
  Smartphone, 
  GitMerge, 
  Shield, 
  Building2,
  Server,
  Database,
  Code,
  Cpu,
  Monitor,
  Zap
} from 'lucide-react';

interface ServiceIconProps {
  iconName: string;
  size?: number;
  className?: string;
}

const iconMap = {
  // Service Icons
  'cloud': Cloud,
  'brain': Brain,
  'smartphone': Smartphone,
  'git-merge': GitMerge,
  'shield': Shield,
  'building2': Building2,
  'server': Server,
  'database': Database,
  'code': Code,
  'cpu': Cpu,
  'monitor': Monitor,
  'zap': Zap,
  
  // Alternative names for compatibility
  'Cloud': Cloud,
  'Brain': Brain,
  'Smartphone': Smartphone,
  'GitMerge': GitMerge,
  'Shield': Shield,
  'Building2': Building2,
  'Server': Server,
  'Database': Database,
  'Code': Code,
  'Cpu': Cpu,
  'Monitor': Monitor,
  'Zap': Zap
};

// Emoji fallbacks for each service
const emojiMap: { [key: string]: string } = {
  'cloud': '☁️',
  'brain': '🧠',
  'smartphone': '📱',
  'git-merge': '🔀',
  'shield': '🛡️',
  'building2': '🏢',
  'server': '🖥️',
  'database': '💾',
  'code': '💻',
  'cpu': '⚡',
  'monitor': '🖥️',
  'zap': '⚡',
  
  // Alternative names
  'Cloud': '☁️',
  'Brain': '🧠',
  'Smartphone': '📱',
  'GitMerge': '🔀',
  'Shield': '🛡️',
  'Building2': '🏢',
  'Server': '🖥️',
  'Database': '💾',
  'Code': '💻',
  'Cpu': '⚡',
  'Monitor': '🖥️',
  'Zap': '⚡'
};

const ServiceIcon: React.FC<ServiceIconProps> = ({ iconName, size = 24, className = '' }) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  const emojiIcon = emojiMap[iconName];

  if (IconComponent) {
    return <IconComponent size={size} className={className} />;
  }

  // Fallback to emoji if icon component not found
  if (emojiIcon) {
    return (
      <span 
        className={`inline-block ${className}`} 
        style={{ fontSize: `${size}px`, lineHeight: 1 }}
      >
        {emojiIcon}
      </span>
    );
  }

  // Ultimate fallback
  return (
    <span 
      className={`inline-block ${className}`} 
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    >
      🔧
    </span>
  );
};

export default ServiceIcon;
