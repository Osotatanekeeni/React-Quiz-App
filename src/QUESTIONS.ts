export const QUESTIONS = [
    {
        question: 'What is the git command that downloads your repository from GitHub to your computer?',
        correct_answer: 'git clone',
        incorrect_answers: ['git push', 'git commit', 'git fork'],
    },

    {
        question: 'Git is the same as GitHub',
        correct_answer: 'False',
        incorrect_answers: ['True'],
    },
    {
        question: 'What is the command to get the installed version of Git?',
        correct_answer: 'git --version',
        incorrect_answers: ['gitVersion', 'git status', 'git help version'],
    }, 
    {
        question: 'What is the command to add all files and changes of the current folder to the staging environment of the Git repository?',
        correct_answer: 'git add .',
        incorrect_answers: ['git add -all', 'git add -a', 'git add -files'],
    },
    {
        question: 'What is the command to get the current status of the Git repository?',
        correct_answer: 'git status',
        incorrect_answers: ['git config --status', 'git getStatus', '--status'],
    },
    {
        question: 'What is the command to initialize Git on the current repository?',
        correct_answer: 'git init',
        incorrect_answers: ['start git', 'initialize git', 'git start'],
    },
    {
        question: 'What is the command to commit the staged changes of the current repository?',
        correct_answer: 'git commit',
        incorrect_answers: ['git save', 'git snapshot', 'git com'],
    },
    {
        question: 'Git automatically adds new files to the repository and starts tracking them',
        correct_answer: 'False',
        incorrect_answers: ['True'],
    },
    {
        question: 'What command is used to start the React local development server?',
        correct_answer: 'npm start',
        incorrect_answers: ['npm build', 'npm serve', 'npm run dev'],
    },
    {
        question: 'What is the default local host port that a React development server uses?',
        correct_answer: '3000',
        incorrect_answers: ['5000', '8080', '8081'],
    },
    {
        question: 'To develop and run React code, Node.js is required',
        correct_answer: 'True',
        incorrect_answers: ['False'],
    },
    {
        question: 'What keyword creates a constant in JavaScript',
        correct_answer: 'const',
        incorrect_answers: ['let', 'var', 'constant'],
    },
    {
        question: 'React component names must begin with an uppercase letter',
        correct_answer: 'True',
        incorrect_answers: ['False'],
    },
    {
        question: 'Which operator can be used to conditionally render a React component?',
        correct_answer: '&&',
        incorrect_answers: ['||', '??', '::'],
    },
    {
        question: 'What is the correct syntax to import a Component from React?',
        correct_answer: 'import {Component} from \'react\',',
        incorrect_answers: ['import Component from \'react\'', 'import React.Component from \'react\'', 'import [Component] from \'react\''],
    },
    {
        question: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
        correct_answer: 'key',
        incorrect_answers: ['data', 'index', 'id'],
    }
]