export entity_plural_const=BLOGS
export entity_capital=Blog
export entity=blog
export entity_plural=blogs
export entity_capital_plural=Blogs

mv src/actions/entitiesActions.js src/actions/${entity_plural}Actions.js
mv src/components/Entity.js src/components/${entity_capital}.js
mv src/pages/EntitiesPage.js src/pages/${entity_capital_plural}Page.js
mv src/reducers/entitiesReducer.js src/reducers/${entity_plural}Reducer.js

grep -rl '{entity_plural_const}' * | xargs -i@ sed -i "s/{entity_plural_const}/$entity_capital/g" @
grep -rl '{entity_capital}' * | xargs -i@ sed -i "s/{entity_capital}/$entity_capital/g" @
grep -rl '{entity}' * | xargs -i@ sed -i "s/{entity}/$entity/g" @
grep -rl '{entity_plural}' * | xargs -i@ sed -i "s/{entity_plural}/$entity_plural/g" @
grep -rl '{entity_capital_plural}' * | xargs -i@ sed -i "s/{entity_capital_plural}/$entity_capital_plural/g" @
