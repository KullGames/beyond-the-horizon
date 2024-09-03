// priority: 10

/**
 * @file Recipe additions for Botania's crafting methods.
 *
 */

/**
 * Botania Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:botania/';

  // Mana Infusion - Alchemy
  event.recipes.botania.mana_infusion('minecraft:kelp', 'minecraft:seagrass', 200, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/seagrass_to_kelp`);
  event.recipes.botania.mana_infusion('minecraft:seagrass', 'minecraft:kelp', 200, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/kelp_to_seagrass`);
  event.recipes.botania.mana_infusion('minecraft:weeping_vines', 'minecraft:twisting_vines', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/twisting_vines_to_weeping_vines`);
  event.recipes.botania.mana_infusion('minecraft:twisting_vines', 'minecraft:weeping_vines', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/weeping_vines_to_twisting_vines`);

  // Mana Infusion - Other
  event.recipes.botania.mana_infusion('minecraft:crying_obsidian', 'minecraft:obsidian', 500).id(`${ID_PREFIX}mana_infusion/obsidian_to_crying_obsidian`);

  // Pure Daisy
  event.recipes.botania.pure_daisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand').id(`${ID_PREFIX}pure_daisy/soul_sand_to_soulless_sand`);
  event.recipes.botania.pure_daisy('minecraft:sand', 'forbidden_arcanus:soulless_sand').id(`${ID_PREFIX}pure_daisy/soulless_sand_to_sand`);
  event.recipes.botania.pure_daisy('minecraft:dirt', 'minecraft:soul_soil').id(`${ID_PREFIX}pure_daisy/soul_soil_to_dirt`);

  // Orechid - Stone
  event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 7000).id(`${ID_PREFIX}orechid/zinc_ore`);
  event.recipes.botania.orechid('eidolon:silver_ore', 'minecraft:stone', 3000).id(`${ID_PREFIX}orechid/silver_ore`);
  event.recipes.botania.orechid('eidolon:lead_ore', 'minecraft:stone', 2000).id(`${ID_PREFIX}orechid/lead_ore`);
  event.recipes.botania.orechid('forbidden_arcanus:arcane_crystal_ore', 'minecraft:stone', 1000).id(`${ID_PREFIX}orechid/arcane_crystal_ore`);
  event.recipes.botania.orechid('immersiveengineering:ore_aluminum', 'minecraft:stone', 4000).id(`${ID_PREFIX}orechid/bauxite_ore`);
  event.recipes.botania.orechid('immersiveengineering:ore_nickel', 'minecraft:stone', 1500).id(`${ID_PREFIX}orechid/nickel_ore`);

  // Orechid - Deepslate
  event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 150).id(`${ID_PREFIX}orechid/deepslate_zinc_ore`);
  event.recipes.botania.orechid('eidolon:deep_lead_ore', 'minecraft:deepslate', 100).id(`${ID_PREFIX}orechid/deepslate_lead_ore`);
  event.recipes.botania.orechid('eidolon:deep_silver_ore', 'minecraft:deepslate', 125).id(`${ID_PREFIX}orechid/deepslate_silver_ore`);
  event.recipes.botania.orechid('forbidden_arcanus:deepslate_arcane_crystal_ore', 'minecraft:deepslate', 75).id(`${ID_PREFIX}orechid/deepslate_arcane_crystal_ore`);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_aluminum', 'minecraft:deepslate', 75).id(`${ID_PREFIX}orechid/deepslate_bauxite_ore`);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_nickel', 'minecraft:deepslate', 100).id(`${ID_PREFIX}orechid/deepslate_nickel_ore`);
  event.recipes.botania.orechid('irons_spellbooks:arcane_debris', 'minecraft:deepslate', 10).id(`${ID_PREFIX}orechid/arcane_debris`);

});
