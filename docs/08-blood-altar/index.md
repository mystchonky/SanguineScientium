---
title: Blood Altar
---
One of the central concepts of Blood Magic is building a glorious ziggurat to focus your power. These pages will guide you in the construction of this masterwork.


## The Blood Altar {#the-blood-altar}

The Blood Altar is the central block of the mod, able to convert raw Blood into pure Life Essence. While it may start off small and insignificant, its strength and size grows throughout the mod, acting as a cornerstone for most of your power.

![Image](/img/BloodAltar/1.png)

When placed into the world, the Blood Altar converts blood into Life Essence, which it then uses to transfigure items placed into it. By right-clicking while looking at the Altar, you may insert one item from your hand into the Altar's internal inventory. Right-clicking with an empty hand will extract the item.

![Image](/img/BloodAltar/2.png)

The Tier 1 Blood Altar, which has no runes.

In order for you to add Life Essence, measured as “LP”, you first have to craft a Sacrificial Knife. By right clicking while aiming at air with the knife, you can "extract" 200 LP for the cost of one heart, placing it into a nearby Altar. The Altar starts with a maximum capacity of 10,000LP, and the blood level in the basin indicates the percentage filled. The [Divination Sigil](#divination-sigil) allows more detailed information about the Altar.

![Image](/img/BloodAltar/3.png)

Keep in mind that 10% of the total LP the altar can hold will be absorbed into an invisible internal 'tank', used for extracting and inserting Life Essence into the Altar.

The Blood Altar will attempt to start to craft as soon as an item is placed inside (or after a periodic 5 seconds). The LP inside of the Altar will slowly drain (indicated by red particles), transforming the item. If there is no LP in the Altar, gray smoke will appear to indicate that the Altar is losing progress instead. Once enough LP is consumed (cost multiplied by number in the item stack), the full stack will be transformed into a new item.

The first item that you will want to craft is a [Weak Blood Orb](#soul-network), which by default is a diamond plus 2000 LP inside of a Tier 1 Blood Altar. All items that can be crafted by the Blood Altar can be found using Just Enough Items (JEI).

To upgrade the Blood Altar, you need to craft Blood Runes and place them around the Altar. Blood Runes act as upgrades to the Altar, and by using more advanced versions of the Blood Runes you can confer different effects on the Altar. The basic version, the Blank Rune, does not give any upgrades - it's only use is to upgrade the Tier of the Altar.

![Image](/img/BloodAltar/4.png)

In order to upgrade the Blood Altar to Tier 2, you must place 8 Blood Runes around the Altar. The runes in the cardinals can be upgraded, but the corner runes cannot act as upgrade runes until Tier 3.

![Image](/img/BloodAltar/5.png)

The Tier 2 Blood Altar, which has 8 total runes.

Now that you have a Tier 2 Altar, you can look into getting Life Essence from somewhere other than yourself. The Dagger of Sacrifice will allow you to sacrifice any mob (monster or passive) that stands within 2 blocks of your Altar, instantly killing them and granting you a decent sum of LP. You can increase the amount you get per kill with
[Runes of Sacrifice](#heading=h.qx23oscd0qvm). Different entities give different amounts of LP. Check your configs for more info.

![Image](/img/BloodAltar/6.png)

_Slaughtering villagers for fun and profit!_

To upgrade the Blood Altar to Tier 3, place 5 Blood Runes one block down and two blocks away from the previous set of runes along each edge. Then place two blocks (indicated by the Stone Bricks) in each corner, starting above the new ring of runes, and then cap each pillar with Glowstone Blocks.To check that it is successfully upgraded, use a [Divination Sigil](#divination-sigil) to check the tier. Note that any non-air block can be used for the pillars below the Glowstone.

![Image](/img/BloodAltar/7.png)

_The Tier 3 Blood Altar, which has 28 total runes, 20 more than a Tier 2, 5 on each side._

To upgrade the Blood Altar to Tier 4, place 7 Blood Runes one block down and two blocks away from the previous set of runes along each edge. Then place four solid blocks in each corner, starting above the new ring of runes, and then cap each pillar with [Bloodstone Bricks](#heading=h.z8tusqsvk613) and/or Large Bloodstone Bricks. For these, you'll need [Tau Fruit](#tau-fruit), found via the [Edge of the Hidden Realm](#edge-of-the-hidden-realm) ritual.

![Image](/img/BloodAltar/8.png)

_The Tier 4 Blood Altar, which has 56 total runes, 28 more than a Tier 3, 7 on each side._

To upgrade the Blood Altar to Tier 5, place 15 Blood Runes$() one block down and three blocks away from the previous set of runes along each edge. Leave a one-block gap on either end, then place a [Hellforged Block](#demonite) at each corner. You'll have to go delving deep into the [Demon Realm](#dungeon-delving) for this rare and exotic metal.

![Image](/img/BloodAltar/9.png)

_The Tier 5 Blood Altar, which has 108 total runes, 52 more than a Tier 4, 13 on each side._


## Redstone and Automation {#redstone-and-automation}

The [Blood Altar](#the-blood-altar) is a fantastic tool, but standing around and waiting for slates to craft is not your idea of a good time. Luckily, items and LP can be automatically piped in and out of the altar, albeit with a few caveats.

While a simple Hopper lets you pipe items in, the Altar won't stop it from inputting more than 1 at a time. It will happily craft 64 slates in one go, consuming 64 times as much LP as usual to do so - but if you can't supply said LP fast enough, you're going to run into trouble.

Additionally, the Altar makes no distinction between input and output, so without some sort of filter, items will be pulled in and out as fast as your item transfer system can handle. Perhaps a look at the [Routing Nodes](#routing-nodes) will be helpful...

The altar also supports the transfer of Life Essence, both to and from an external tank. Simply hook up your fluid pipe of choice and you can store excess Life Essence for later crafts.

Note that the transfer speed is very slow by default. If you want to speed it up, you'd best look into [Acceleration Runes](#acceleration-rune) and [Displacement Runes](#displacement-rune).

Don't forget that this Life Essence isn't taken directly from the [Altar](#the-blood-altar) itself, but rather from a second, secret internal tank. This tank can hold up to 10% of the Life Essence that the altar itself can, so if the numbers don't appear to be adding up exactly right, or if Life Essence appears to be vanishing from your altar, this is probably where it's going. The same limitations apply to Life Essence being piped in.

The amount of Life Essence in the [Blood Altar](#the-blood-altar) can be read via a comparator on the side, similarly to a vanilla chest.

If you place a Bloodstone Brick underneath the altar, the comparator will instead read the value of the [Soul Network](#soul-network) of the owner of any orb that is placed into the Altar.

The signal strength depends on the size of the orb in the altar, not the maximum LP of the network. For example, if you have 500,000 LP, a Weak Blood Orb would show as completely full, but a Master Blood Orb would show as only half full. This can be used to, for example, deactivate certain rituals when you are running low on LP, to ensure you don't run out.

Lastly, placing a Redstone Lamp underneath the altar will make it briefly output a redstone signal upon finishing a crafting operation.


## Slates {#slates}

The [Blood Altar](#the-blood-altar)'s main use is the production of Slates. Each tier of slate requires the previous tier and a more powerful altar than the last.

Note that Etherial Slates aren't currently implemented by default, but may be if you're playing in a modpack. Check JEI for details.

![Image](/img/BloodAltar/10.png)
![Image](/img/BloodAltar/11.png)


## Soul Network {#soul-network}

The Soul Network is the network that connects your Soul to all of your bound items, rituals and blocks. Functionally, it is a global storage of LP unique to each player that can be added to and extracted from, using the player's bound items as an intermediary. When you first right-click with an item that can be bound to a Soul Network, it will bind to you and will be labelled as being "owned" by you.

As such, any action that the item does that has an LP cost will drain from your Soul Network. In some cases, if the item cannot get its LP from the Soul Network, it will instead directly take the LP cost from your health.

in other cases (such as when an ongoing Ritual drains your network completely), they will merely cause unceasing nausea until either the Ritual is deactivated or your Soul Network is re-filled.

In order to fill your Soul Network, you will need to construct a Blood Orb.

Blood Orbs can be charged with LP in one of two ways.



* A player can sacrifice 1 heart of health by right-clicking with the Blood Orb, providing the bound Soul Network with 200 LP.
* The Blood Orb can be placed inside a [Blood Altar](#the-blood-altar) with some Life Essence in it. The Orb will absorb it as fast as it can, limited by your Altar's [Speed Runes](#heading=h.frzuf6s8qkh6).

There is a separate Blood Orb that can be created for each Tier of the Blood Altar. Their recipes are documented overleaf.



* Weak Blood Orb - Max capacity: 5k LP.
* Apprentice Blood Orb - Max capacity: 25k LP.
* Magician Blood Orb - Max capacity: 150k LP.
* Master Blood Orb - Max capacity: 1M LP.
* Archmage Blood Orb - Max capacity: 10M LP.

![Image](/img/BloodAltar/12.png)

![Image](/img/BloodAltar/13.png)

![Image](/img/BloodAltar/14.png)

If that's still not enough LP storage for you, consider using [Runes of the Orb](#heading=h.su681twqe7do).
