This is a custom directive meant to replace semantic ui's search/dropdown element.
Putting it to bed for now because time, but I (Gus) think it'd be wonderful to have
a way of implementing these search/select/tag fields in a dry-er way. Setting this 
up with Semantic UI can really bloat a file for no reason. 

When I actually get around to it, this directive will be anchored on any div/input/select, take a setting for:
- multiple `[[x thing][x other thing] ▼]`
- single `[thing ▼]`
- tree `[thing/variant/subvariant]`

It will also need an array of data to render as the options - maybe it could take a 'freeform' option,
and split user input into tags on comma.

would it be better for this to act as an element or an attribute? You want it to fit smoothy into a form.
I feel like tacking it on to a select would be a little cumbersome. 

this needs to support data binding, placeholders, setting values programatically, loading text, 
adding new tags, scrolling through a dropdown menu, and searching through it. Maybe even tab completion.