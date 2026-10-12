import { styles } from 'vjsc/styles';

export default styles({
  file: 'menus.css',
  prefix: 'media-cast-menu',
  rules: {
    content: {
      utilities: 'gap-0!',
    },
    item: {
      utilities: [
        'relative flex! w-full! h-auto! min-h-0! shrink-0 items-center! justify-start! gap-1.5! rounded-media-menu-item px-2 py-1 text-start',
        'hover:highlight-media focus-visible:highlight-media focus-visible:outline-media-ring',
      ],
    },
  },
});
