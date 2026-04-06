/**
 * Gallery image data for each event.
 *
 * HOW TO ADD MORE IMAGES
 * ----------------------
 * 1. Drop files into the matching folder under src/assets/gallery/<event-folder>/
 * 2. Import them below and append to the relevant array.
 *    First item = card cover image. All items appear in the modal lightbox.
 */

// ─── Imports ──────────────────────────────────────────────────────────────────

import cocaCola2025     from '../assets/gallery/coca-cola-annual-sales-conference-2025/cc.jpg';
import elephantHouse    from '../assets/gallery/elephant-house-christmas-truck-activation/eh.jpg';
import hnbSolo          from '../assets/gallery/hnb-solo-merchant-activation/hnb.jpg';
import malibanNutrifix  from '../assets/gallery/maliban-nutrifix-mall-activation/maliban.jpg';
import anchorSmmt       from '../assets/gallery/anchor-north-east-smmt-campaign/anc.jpg';
import cocaColaAwards   from '../assets/gallery/coca-cola-award-ceremony-2024/ccaw.jpg';
import zestaAwrudu      from '../assets/gallery/zesta-sunshine-awrudu-celebration/zes.jpg';
import ginger           from '../assets/gallery/ginger-office-town-activations/gng.jpg';
import xtraCricket      from '../assets/gallery/xtra-cricket-tournament-2024/extra.jpg';
import hemas            from '../assets/gallery/hemas-beauty-drive-campaign/hemas.jpg';
import cokeBuddy        from '../assets/gallery/coke-buddy-launch-2024/ccbuddy.jpg';
import earthEssence     from '../assets/gallery/earth-essence-mothers-day-celebration/ee.jpg';

// ─── Gallery arrays ────────────────────────────────────────────────────────────

export const galleryImages: Record<string, string[]> = {
  // Project id: 1 — Coca Cola Annual Sales Conference 2025
  'coca-cola-annual-sales-conference-2025': [
    cocaCola2025,
  ],

  // Project id: 2 — Elephant House Christmas Truck Activation
  'elephant-house-christmas-truck-activation': [
    elephantHouse,
  ],

  // Project id: 3 — HNB SOLO Merchant Activation
  'hnb-solo-merchant-activation': [
    hnbSolo,
  ],

  // Project id: 4 — Maliban Nutrifix Mall Activation
  'maliban-nutrifix-mall-activation': [
    malibanNutrifix,
  ],

  // Project id: 5 — Anchor North & East SMMT Campaign
  'anchor-north-east-smmt-campaign': [
    anchorSmmt,
  ],

  // Project id: 6 — Coca Cola Award Ceremony 2024
  'coca-cola-award-ceremony-2024': [
    cocaColaAwards,
  ],

  // Project id: 7 — Zesta Sunshine Awrudu Celebration
  'zesta-sunshine-awrudu-celebration': [
    zestaAwrudu,
  ],

  // Project id: 8 — Ginger Office & Town Activations
  'ginger-office-town-activations': [
    ginger,
  ],

  // Project id: 9 — Xtra Cricket Tournament 2024
  'xtra-cricket-tournament-2024': [
    xtraCricket,
  ],

  // Project id: 10 — Hemas Beauty Drive Campaign
  'hemas-beauty-drive-campaign': [
    hemas,
  ],

  // Project id: 11 — Coke Buddy Launch 2024
  'coke-buddy-launch-2024': [
    cokeBuddy,
  ],

  // Project id: 12 — Earth Essence Mothers Day Celebration
  'earth-essence-mothers-day-celebration': [
    earthEssence,
  ],
};
