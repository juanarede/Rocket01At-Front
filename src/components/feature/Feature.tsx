

import { Brain, Tool, File } from '../icons/icons';

const features = [
  {
    id: 1,
    name: 'Soporte Técnico',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    href: '#',
    icon: <Tool />,
  },
  {
    id: 2,
    name: 'Sistema de descarga de archivos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    href: '#',
    icon: <File />,
  },
  {
    id: 3,
    name: 'Sistema de Red Neuronal - IA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    href: '#',
    icon: <Brain />,
  },
];

export default function Feature() {
  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto my-20">
      <h2 className="max-w-3xl text-white text-8xl font-bold font-manrope leading-[0.9] lg:text-start text-center break-words zuume-font">
        Lorem ipsum dolor sit amet, consectetur
      </h2>

      <div id="features" className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {feature.icon}

              <dt className="mt-4 flex items-center gap-x-3 text-xl font-semibold leading-7 text-neutral-900 dark:text-neutral-200">
                {feature.name}
              </dt>

              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
