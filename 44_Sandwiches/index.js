function sandwich(...arguments) {
    console.log(`The person wants ${arguments.join(', ')} in his sandwich`)
}

sandwich('cheese')
sandwich('cheese', 'mayonnaise')
sandwich('cheese', 'mayonnaise', 'egg')