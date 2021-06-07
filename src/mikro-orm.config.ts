import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import path from 'path';
import { User } from './entities/User';

console.log('dirname', __dirname);

export default {
  migrations: {
    path: path.join(__dirname, '/migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    emit: 'ts'
  },
  dbName: 'lireddit',
  user: 'postgres',
  password: 'admin312',
  type: 'postgresql',
  debug: !__prod__,
  entities: [Post, User],
} as Parameters<typeof MikroORM.init>[0];
