/*
    Assignment

    You will need two classes or factories:

        LinkedList class / factory, which will represent the full list.
        Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

    Build the following functions in your linked list class:

        append(value) adds a new node containing value to the end of the list
        prepend(value) adds a new node containing value to the start of the list
        size returns the total number of nodes in the list
        head returns the first node in the list
        tail returns the last node in the list
        at(index) returns the node at the given index
        pop removes the last element from the list
        contains(value) returns true if the passed in value is in the list and otherwise returns false.
        find(value) returns the index of the node containing value, or null if not found.
        toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
        The format should be: ( value ) -> ( value ) -> ( value ) -> null

    Extra credit

        insertAt(value, index) that inserts a new node with the provided value at the given index.
        removeAt(index) that removes the node at the given index.

    Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
*/



node = (_value = null, _next = null) => {      
 return { _value, _next }
}

/*
      check node correct
    a = node('a')
    _list = {'a': a}
    b = node('b')
    _list['b'] = b 
    _list
    a._next = _list['b']
    a._next
*/


linkedList = () => {
    _list = {}
    _head = null
    _tail = null
    _keys = () => Object.keys(_list)
    _hasDupe = (value) => _keys().includes(value)
    keys = () => _keys()
    append = (value) => {
        if (_hasDupe(value)) {
            console.log('duplicate')
            return
        }
        _list[value] = node(value)
        if (_keys().length === 1) { 
            console.log([value, _keys().length, _list[value]])    
            _head = _list[value] 
        } // if it's the first then its the head
        if (_tail && _tail._value) { // if there is a tail already then it needs to reference the new appendage
            ptr = _list[_tail._value] 
            console.log([_tail._value, ptr, _list[_tail._value]])
            ptr._next = _list[value]
        }
        _tail = _list[value] // automatically it becomes the tail
    }
    prepend = (value) => { 
        if (_hasDupe(value)) {
            console.log('duplicate')
            return
        }
        _list[value] = node(value)
        _list[value]._next = _list[head()._value]
        _head = _list[value]
    }
    size = () => _keys().length 
    head = () => _head
    tail = () => _tail
    at = (idx) => {
        //_list[_keys()[idx]]
        ptr = _list[_head._value]
        if (idx === 0) {
            return ptr
        }
        for (n = 0; n < idx; n++) {
            ptr = _list[ptr._next._value]
        }
        return ptr
    }
    pop = () => { 
        let penultimate 
        ptr = _list[_head._value]
        while (ptr._next !== null) {
            if (ptr._next) {
                penultimate = _list[ptr._value]
                ptr = ptr._next
            }
        }
        _tmp = ptr.value 
        delete _list[_tmp]

        _tail = penultimate
        _tail._next = null
        return ptr
    }
    contains = (node) => _keys().includes(node)
    find = (value) => {
        let __keys = _keys()
        if (__keys.includes(value)) {
            return _list[value]
        } 
        return -1
    }
    toString = () => { 
        _listing = []
        ptr = _list[_head._value]
        while (ptr._next !== null) {
            _listing.push(((ptr._next === null) ? ptr._value : ptr._value + ' -> '))
            ptr = _list[ptr._next._value]
        }
        _listing.push(ptr._value)
        console.log(_listing.join(''))
    }
    insertAt = (idx, value) => { 
        if (_hasDupe(value)) {
            console.log('duplicate')
            return
        }
        _list[value] = node(value)
        console.log(['created', _list[value]])
        ptr = at(idx - 1)
        console.log(ptr)
        // insert after new  
        _list[value]._next = ptr._next // _list[ptr._value]._next 
        ptr._next = _list[value]
       }
    removeAt = (idx) => { 
        ptr = at(idx - 1)
        rmv = ptr._next
        ptr._next = ptr._next._next
        delete _list[rmv._value]
        return rmv
    }
    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt, keys, _list }
}


/*
    check linkedlist correctness

    list = linkedList()

    list.tail()
    list.head()
    list.keys().length

    ['a','b','c', 'd','e','f'].forEach(el => {
        list.append(el)
        console.log([list.keys().length, list.head()._value, list.tail()._value])
    });

    list.toString()

    list.insertAt(3, 'a')
    list.toString()

    rmvd = list.removeAt(4)
    list.toString()

    list.prepend('z')
    console.log([list.keys().length, list.head()._value, list.tail()._value])
    list.toString()

    list.prepend('y')
    console.log([list.keys().length, list.head()._value, list.tail()._value])
    list.toString()
    list.find('m')

    _pop = list.pop()
    console.log([list.keys().length, list.head()._value, list.tail()._value])
    list.toString()

    console.log([list.keys().length, list.head()._value, list.tail()._value])
    list.toString()
    list.at(0)

    console.log([list.keys().length, list.head()._value, list.tail()._value])
    list.toString()
    list.at(5)

*/




