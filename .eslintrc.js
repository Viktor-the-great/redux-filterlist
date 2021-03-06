module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": ["eslint:recommended", "airbnb"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js"]
            },
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    },
    "rules": {
        "function-paren-newline": ["error", "consistent"],
        "react/forbid-prop-types": "off",
        "no-plusplus": "off",
        "no-nested-ternary": "off",
    }
};