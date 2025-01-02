// priority: 0

/**
 * @file JEI Blacklist for Beyond the Horizon
 *
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *
 */

/**
 * JEI Item Hiding Event Handler
 */
JEIEvents.hideItems(event => {
  // VZ: Why is event.hide(...) marked as deprecated by KubeJS?
  event.hide([
    'ae2:facade',
    'aether:aether_portal_frame',
    'alexscaves:sulfur_dust',
    'bbb:rope',
    'buzzier_bees:honey_apple',
    /clayworks:.*terracotta_brick.*/,
    'cofh_core:experience',
    'cofh_core:honey',
    'cofh_core:potion',
    'create:crushed_raw_uranium',
    'createaddition:copper_wire',
    'createaddition:electrum_wire',
    'createdeco:brass_coin',
    'createdeco:brass_coinstack',
    'createdeco:industrial_iron_coin',
    'createdeco:industrial_iron_coinstack',
    'createdeco:zinc_coin',
    'createdeco:zinc_coinstack',
    'createdeco:zinc_sheet',
    'enderio:silicon',
    'farmersdelight:rope',
    /ftbquests:.*/,
    'galosphere:deepslate_silver_ore',
    'galosphere:raw_silver',
    'galosphere:raw_silver_block',
    'galosphere:silver_block',
    'galosphere:silver_ingot',
    'galosphere:silver_nugget',
    'galosphere:silver_ore',
    'immersive_aircraft:propeller',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:deepslate_ore_silver',
    'immersiveengineering:dust_sulfur',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:nugget_silver',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_silver',
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
    'immersiveengineering:raw_block_lead',
    'immersiveengineering:raw_block_silver',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:raw_lead',
    'immersiveengineering:raw_silver',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:slab_storage_uranium',
    'immersiveengineering:storage_lead',
    'immersiveengineering:storage_silver',
    'immersiveengineering:storage_uranium',
    'incubation:fried_egg',
    'lightmanscurrency:portable_atm',
    'lightmanscurrency:portable_terminal',
    'moreminecarts:chunk_loader',
    'moreminecarts:chunkrodite',
    'moreminecarts:chunkrodite_block',
    'moreminecarts:minecart_with_chunk_loader',
    'neapolitan:milk_bottle',
    'nethersdelight:blackstone_furnace',
    'paraglider:spirit_orb',
    'paraglider:anti_vessel',
    'paraglider:essence',
    'pneumaticcraft:copper_nugget',
    /paraglider:.*statue.*/,
    'powah:uraninite_raw',
    /powah:.*uraninite_ore.*/,
    /quark:.*shingles.*/,
    'rats:rat_upgrade_aristocrat',
    'rats:token_fragment',
    'rats:token_piece',
    'rustic_engineer:abyssal_submarine_item',
    'rustic_engineer:air_ship_item',
    'rustic_engineer:chair',
    'rustic_engineer:engine',
    'rustic_engineer:gear',
    'rustic_engineer:golden_pieces',
    'rustic_engineer:hydraulic_press',
    'rustic_engineer:movable_parts',
    'rustic_engineer:pipe_wrench',
    'rustic_engineer:tool_mech',
    /rustic_engineer:.*solarite*/,
    /rustic_engineer:book.*/,
    /upgrade_aquatic:.*bedroll/,
    'v_slab_compat:immersiveengineering/storage_uranium_vertical_slab',
    /wardrobe:.*backpack/,
    /waystones:.*/,
    /woodworks:.*ladder/,
  ]);

  // Hide IE dusts that are replaced by Create crushed raw ores.
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) =>
    event.hide(`immersiveengineering:dust_${material}`)
  );

});
