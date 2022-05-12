export default {
  type: 'object',
  properties: {
    content: { type: 'object' },
    type: { type: 'string' },
    name: { type: 'string' },
    title: { type: 'string' },
  },
  required: ['content', 'type', 'name'],
} as const;
