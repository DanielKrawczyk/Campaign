import * as data_quests from './quests.json';
import * as data_items from './items.json';
import * as data_effects from './effects.json';
import * as data_enemies from './enemies.json';
import * as data_story from './story.json';

const data = {
    stories: data_story.default,
    quests: data_quests.default,
    items: data_items.default,
    effects: data_effects.default,
    enemies: data_enemies.default
}

export default data;