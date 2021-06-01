import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__,
    entities: [Post],
  });

  const post = orm.em.create(Post, {title: 'my first post'})
};

main();
