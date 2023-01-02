---
title: Item Routing
---

Who needs hoppers? Blood magic has a versatile and flexible item routing network, with a variety of filters to sort every need.


## Composite Item Filter {#composite-item-filter}

The Composite Item Filter does nothing on its own, but when combined with another type of Filter, it allows you to apply that filter's rules to it. This means you can, for example, use the Enchantment Filter's 'Any Enchantments' and the Tag Filter's 'forge:swords' to only allow enchanted swords to pass through.

Similarly to the [Standard Item Filter](#standard-item-filter), it has a quantity selector and an allow/deny function. Leaving the quantity blank defaults to 'all'. Other buttons will appear on the GUI as you combine it with other filters.

![Image](/img/ItemRouting/1.png)

![Image](/img/ItemRouting/2.png)


## Enchantments Item Filter {#enchantments-item-filter}

The Enchantments Item Filter lets you sort items via any Enchantments that they may (or may not) have. It operates similarly to the [Standard Item Filter](#standard-item-filter), particularly with regards to the quantity and allow/deny functions, but with a few extra buttons.

![Image](/img/ItemRouting/3.png)

Any enchanted book will work for this recipe.

![Image](/img/ItemRouting/4.png)

_Note the two new buttons to the right of the 'Allow' button._

The first button allows you to select whether to match Every Enchantment on an enchanted item, Any Enchantment, or one particular enchantment. The second button allows you to specify whether to pay attention to the level or not. (E.G. 'Protection III' versus 'Protection').

If you insert an unenchanted item into the filter, you can effectively Allow or Deny any sort of enchantment to be inserted into or removed from the specified inventory.


## Filter Parts {#filter-parts}

![Image](/img/ItemRouting/5.png)

Filter Parts are an integral component in all Filters. They have no use on their own.


## Mod Item Filter {#mod-item-filter}

The Mod Item Filter lets you select up to 9 items from different mods. Similarly to the [Standard Item Filter](#standard-item-filter), it has a quantity selector and an allow/deny function. Leaving the quantity blank defaults to 'all'.

For each item that you put into this filter, any item from the same mod will be matched.

![Image](/img/ItemRouting/6.png)

This allows you to deny/permit entire swathes of items. Handy for sorting all of your Blood Magic items into their own super-special chest, to name an example at random.


## Node Router {#node-router}

The Node Router is used to link Nodes together into a Network. Its functionality is straightforward - Simply sneak-right-click while aiming at  a node, then do the same to another node within 16 blocks. These two nodes are now linked. If you want to de-select a node, right-click on any other block. See the entry on [Routing Nodes](#routing-nodes) for more information.

![Image](/img/ItemRouting/7.png)

_A slightly magical stick._


## Routing Nodes {#routing-nodes}

Hauling items around by hand may be all right for some people, but we are a Sanguimancer. What's more, we have access to Demon Will! Surely there's a better way to go about things.

As such, you've managed to come up with Routing Nodes. These offer a powerful way to transport, sort, and filter items, sending them magically through the air as you decree.

Routing Node Networks have three main components: Input Nodes, Output Nodes, and the Master Routing Node.

Every network requires exactly one Master Routing Node, and every other Node in the network must be able to trace a route back to the Master, whether directly, or via other Nodes.

Input and Output nodes can withdraw or insert items from any block with an accessible inventory, respectively.

![Image](/img/ItemRouting/8.png)

The Master Node will be able to accept upgrades in the future, but for now it only serves to control and direct the network, acting as its 'Brain'.

A Master Routing Node is all well and good, but without the other two node types, it's not particularly useful on its own, so let's get on to those next.

_Input Routing Nodes _draw items into the network, _Output Routing Nodes_ export them out again, and plain old _Routing Nodes_ serve to extend the reach of your network. As Input and Output nodes are currently otherwise identical, we will be focusing on the Input Routing Node unless otherwise specified.

![Image](/img/ItemRouting/9.png)

Doesn't do a whole lot on its own, but can be used to extend _Routing Networks_ beyond the 16-block reach of a single connection.

![Image](/img/ItemRouting/10.png)

When you place an Input or Output Node down, it will automatically connect to _all adjacent inventories_, but it won't do anything without a Filter of some kind in at least one of its side's slots. For example, you could use a [Standard Item Filter](#standard-item-filter) set to _Iron Ore _on top of a Furnace, a second Output Node with a Filter set to coal on the side of the furnace, and an Input Node underneath set to Iron Ingots.

![Image](/img/ItemRouting/11.png)

_An Output Node in-world._

![Image](/img/ItemRouting/12.png)

_Once we've got our nodes set up, let's open up the Node GUI._

Over on the right, we have our cardinal directions -  **D**own, **U**p, **N**orth, **S**outh, **W**est, and **E**ast. You'll notice that a little picture of a block appears on some buttons, representing what's on that side of the node. The GUI will open up on a side facing an attached inventory, or Down if no inventory is present. The buttons themselves follow the direction the player is facing, so the top button is 'forwards', the left button is 'left', etcetera.

![Image](/img/ItemRouting/13.png)

Over on the left, you'll see a space for us to insert a Filter for the selected side, and a Priority. bigger numbers = more important.

Nodes can have one filter per side - so we'll select the side we want, and put our filter in it. (For more information on Filters, see 'A Primer On Filters')

Once your Input and Output Nodes have been set up, have been linked together with the help of a [Node Router](#node-router) in a network that includes exactly one Master Routing Node,  and both have item filters inserted to the correct sides, you should be good to go! Items will be routed according to the priorities and the rules contained within your filters.

![Image](/img/ItemRouting/14.png)

Nodes do not have to be linked directly to the Master Routing Node, merely to any node on the network.


## Standard Item Filter {#standard-item-filter}

The Standard Item Filter lets you select up to 9 items to withdraw from, or insert into, the adjacent inventory when inserted into a [Routing Node](#routing-nodes).

Each item has a quantity - leaving this blank will default to 'all'.

The Filter also has an Allow and Deny function. In Deny mode, quantities are ignored.

![Image](/img/ItemRouting/15.png)

When used in an _Input Routing Node_, the quantity tells the node how many of that item to leave in the selected inventory. Anything above this amount will be imported into the network.

When used in an _Output Routing Node_, the quantity tells the node how many of that item to fill in the selected inventory with. Anything above this amount will be left in the network - either passed into another valid inventory, or left where it is if no valid inventory exists.

![Image](/img/ItemRouting/17.png)

_The GUI and the mouseover text of a configured filter._


## Tag Item Filter {#tag-item-filter}

The T_ag Item Filter_ lets you select up to 9 items and filter by their associated _Tags_. Similarly to the [Standard Item Filter](#standard-item-filter), it has a quantity selector and an allow/deny function. Leaving the quantity blank defaults to 'all'.

For each item that you put into this filter, you can select whether to match items based on _one specific tag_, or _any of its tags_.

![Image](/img/ItemRouting/18.png)

This allows you to deny/permit categories of items, so you can specify that all items with the tag _forge:ores_ get sent to your furnace, for example.

![Image](/img/ItemRouting/20.png)

_The GUI and the mouseover text of a configured filter._


## Upgrades {#upgrades}

Currently, only one Upgrade is available for the Routing Network.

The _Basic Routing Logic Upgrade_ increases the total amount of items transferred per operation. (once per second, currently). By default, the network will transfer 16 items at a time, but each of these will raise that cap by 8.

These upgrades stack to 16, allowing for a sum total of 144 items to be transferred per second. Note that this can be split over multiple stacks, if many different items need to be transferred at once.

![Image](/img/ItemRouting/21.png)

_Minimum: 400 will_

_Drained: 50 will_
