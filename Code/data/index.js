import * as data_quests from './quests.json';
import * as data_items from './items.json';
import * as data_effects from './effects.json';
import * as data_enemies from './enemies.json';
import * as data_story from './story.json';
import * as data_character from './character.json';
import * as data_npc from './NPC.json';
import * as data_dialogues from './dialogue.json';

    

const data = {
    stories: data_story.default,
    quests: data_quests.default,
    items: data_items.default,
    effects: data_effects.default,
    enemies: data_enemies.default,
    character: data_character.default[0],
    NPC: data_npc.default,
    dialogues: data_dialogues.default
}    



export default data;