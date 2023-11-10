import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import Fallback from '../components/Fallback'



// const dummyData = [
//     {
//         id: "01",
//         title: "wash car"
//     },
//     {
//         id: "02",
//         title: "Read a Book"
//     },
//     {
//         id: "03",
//         title: "Coding"
//     },
//     {
//         id: "04",
//         title: "Development"
//     },

// ]
const TodoScreen = ({ navigation }) => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    const handleAddTodo = () => {

        if (todo.trim() === "") {
            alert("Sorry Empty Input Field")
            return;
        }
        else {
            setTodoList([...todoList, {
                id: Date.now().toString(),
                title: todo
            }])
        }
        setTodo("")
    }

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id != id)
        setTodoList(updatedTodoList)
    }


    const handleEditTodo = (todo) => {
        setEditTodo(todo)
        setTodo(todo.title)
    }


    const handleUpdateTodo = () => {
        const updateTodos = todoList.map((item) => {
            if (item.id == editTodo.id) {
                return {
                    ...item, title: todo
                }
            }

            return item
        })
        alert("Item Updated")
        setTodoList(updateTodos)
        setEditTodo(null)
        setTodo("")
    }

    const handleLogout = async () => {

        navigation.replace('Login');
    };

    const renderTodos = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: "#32a86d",
                borderRadius: 6, marginBottom: 6,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 3,
            }}>
                <Text style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 800,
                    flex: 1,
                    paddingLeft: 20
                }}>
                    {item.title}
                </Text>
                <IconButton icon="pencil" iconColor='#fff' onPress={() => handleEditTodo(item)} />
                <IconButton icon="trash-can" iconColor='#fff' onPress={() => handleDeleteTodo(item.id)} />
            </View>
        )
    }


    return (
        <View style={{ marginHorizontal: 16, }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginTop: 100, marginBottom: 50, textAlign: 'center' }}>Todo App</Text>

            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "blue",
                    borderRadius: 6,
                    paddingVertical: 10,
                    paddingHorizontal: 1,


                }}
                placeholder='Add a Task'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />

            {
                editTodo ? <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 6, marginVertical: 24, alignItems: 'center' }}
                    onPress={() => handleUpdateTodo()}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Save</Text>
                </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 6, marginVertical: 24, alignItems: 'center' }}
                        onPress={() => handleAddTodo()}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Add</Text>
                    </TouchableOpacity>
            }

            {/* Render todo list */}

            {
                todoList.length <= 0 ? <Fallback></Fallback> :
                    <FlatList data={todoList} renderItem={renderTodos} />
            }

            <IconButton
                icon="logout"
                color="green"
                size={24}
                onPress={handleLogout}
                style={{ marginRight: 0, position: 'absolute', flex: 1, right: 0, top: 0 }}
            />
        </View>
    )
}

export default TodoScreen

