# Ionic CRUD

```
npm install ionic cordova -g

ionic start IonicShoppingList blank
```

In app > firebase.credentials.ts, copy over the firebase config object with apiKey, authDomain, etc.

```
export const FIREBASE_CONFIG = { ... }
```

Then

```
npm install firebase angular fire2
```

For development, in firebase database rules section:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

Creating a new page:

```
ionic generate page AddShoppingItem
```

Restart ionic lab in case of invalid link error.