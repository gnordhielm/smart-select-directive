This is a custom directive meant to replace semantic ui's search/dropdown element.

This directive will be anchored on any div/input/select and take a setting for:
- multiple `[[x thing][x other thing] ▼]`
- single `[thing ▼]`
- tree `[thing/variant/subvariant]`

It will also need an array of data to render as the options - maybe it could take a 'freeform' option,
and split user input into tags on comma.

Would it be better for this to act as an element or an attribute? You want it to fit smoothy into a form.
I feel like tacking it on to a select would be a little cumbersome. 

This needs to support data binding, placeholders, setting values programatically, loading text, 
adding new tags, scrolling through a dropdown menu, and searching through it. Maybe even tab completion.
