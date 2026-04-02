var lastSlot = 19;
Array.from(document.querySelectorAll('.vDateField')).forEach(f => { if (f.value == "") { f.value = "2025-05-18" }});
Array.from(document.querySelectorAll('.vTimeField')).forEach(f => { if (f.value == "") { lastSlot += 1; f.value = `${lastSlot>>1}:${lastSlot%2==1?"30":"00"}` }});
