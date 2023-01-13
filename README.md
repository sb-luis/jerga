# @sb-luis/jerga

> Tiny utility library to access and interpolate strings from a dictionary. 

```javascript
import jerga from '@sb-luis/jerga';

jerga.init({
   cake: 'A piece of cake', 
   greet: {
        slang: 'Yo!',
        formal: {
            short: 'A pleasure to meet you, {{name}}.',
            long: '...'
   }
});

// Usage:
jerga.t('cake'); // 'A piece of cake'
jerga.t('greet.slang'); // 'Yo!'
jerga.t('greet.formal.short', { name: 'Jane'}); // 'A pleasure to meet you, Jane.'
jerga.t('greet.formal.short', { name: 'John'}); // 'A pleasure to meet you, John.'
```

