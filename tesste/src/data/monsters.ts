import { Monster } from "../models/Monster.js"

export const monsters:Monster[]=[

{
name:"Great Jagras",
originMap:"Ancient Forest",
maps:["Ancient Forest"],
type:"Fanged Wyvern",
elements:["None"],
weakness:["Fire"],
breakableParts:["Head","Stomach"]
},

{
name:"Kulu-Ya-Ku",
originMap:"Ancient Forest",
maps:["Ancient Forest","Wildspire Waste"],
type:"Bird Wyvern",
elements:["None"],
weakness:["Water"],
breakableParts:["Head","Arms"]
},

{
name:"Pukei-Pukei",
originMap:"Ancient Forest",
maps:["Ancient Forest","Wildspire Waste"],
type:"Bird Wyvern",
elements:["Poison"],
weakness:["Thunder"],
breakableParts:["Head","Tail","Wings"]
},

{
name:"Coral Pukei-Pukei",
variantOf:"Pukei-Pukei",
originMap:"Coral Highlands",
maps:["Coral Highlands"],
type:"Bird Wyvern",
elements:["Water","Poison"],
weakness:["Thunder"],
breakableParts:["Head","Tail"]
},

{
name:"Anjanath",
originMap:"Ancient Forest",
maps:["Ancient Forest"],
type:"Brute Wyvern",
elements:["Fire"],
weakness:["Water"],
breakableParts:["Head","Tail"]
},

{
name:"Fulgur Anjanath",
variantOf:"Anjanath",
originMap:"Hoarfrost Reach",
maps:["Hoarfrost Reach","Guiding Lands"],
type:"Brute Wyvern",
elements:["Thunder"],
weakness:["Ice"],
breakableParts:["Head","Tail"]
},

{
name:"Rathalos",
originMap:"Ancient Forest",
maps:["Ancient Forest"],
type:"Flying Wyvern",
elements:["Fire"],
weakness:["Dragon","Thunder"],
breakableParts:["Head","Wings","Tail"]
},

{
name:"Azure Rathalos",
variantOf:"Rathalos",
originMap:"Ancient Forest",
maps:["Ancient Forest"],
type:"Flying Wyvern",
elements:["Fire"],
weakness:["Dragon"],
breakableParts:["Head","Tail"]
},

{
name:"Silver Rathalos",
variantOf:"Rathalos",
originMap:"Guiding Lands",
maps:["Guiding Lands"],
type:"Flying Wyvern",
elements:["Fire"],
weakness:["Dragon"],
breakableParts:["Head","Tail"]
},

{
name:"Diablos",
originMap:"Wildspire Waste",
maps:["Wildspire Waste"],
type:"Flying Wyvern",
elements:["None"],
weakness:["Ice"],
breakableParts:["Horns","Tail"]
},

{
name:"Black Diablos",
variantOf:"Diablos",
originMap:"Wildspire Waste",
maps:["Wildspire Waste"],
type:"Flying Wyvern",
elements:["None"],
weakness:["Ice"],
breakableParts:["Horns","Tail"]
},

{
name:"Velkhana",
originMap:"Hoarfrost Reach",
maps:["Hoarfrost Reach","Guiding Lands"],
type:"Elder Dragon",
elements:["Ice"],
weakness:["Fire"],
breakableParts:["Head","Tail"]
},

{
name:"Rajang",
originMap:"Guiding Lands",
maps:["Guiding Lands"],
type:"Fanged Beast",
elements:["Thunder"],
weakness:["Ice"],
breakableParts:["Head","Tail"]
},

{
name:"Furious Rajang",
variantOf:"Rajang",
originMap:"Guiding Lands",
maps:["Guiding Lands"],
type:"Fanged Beast",
elements:["Thunder"],
weakness:["Ice"],
breakableParts:["Head","Arms"]
},

{
name:"Fatalis",
originMap:"Castle Schrade",
maps:["Castle Schrade"],
type:"Black Dragon",
elements:["Fire"],
weakness:["Dragon"],
breakableParts:["Head","Chest","Wings"]
}

]