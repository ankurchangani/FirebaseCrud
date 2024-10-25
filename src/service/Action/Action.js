import { collection, doc, setDoc, deleteDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../fierbase"; 

const generateNumericId = () => {
    return Math.floor(Math.random() * 10000); 
};

export const addEmployee = (employee) => async (dispatch) => {
    try {
        const id = generateNumericId();
        await setDoc(doc(db, "employees", id.toString()), { ...employee, id });
        dispatch(fetchEmployees());
    } catch (error) {
        console.error("Error adding employee: ", error);
    }
};

export const updateEmployee = (employee) => async (dispatch) => {
    try {
        await setDoc(doc(db, "employees", employee.id.toString()), { ...employee });
        dispatch(fetchEmployees()); 
    } catch (error) {
        console.error("Error updating employee: ", error);
    }
};

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "employees", id.toString()));
        dispatch(fetchEmployees()); 
    } catch (error) {
        console.error("Error deleting employee: ", error);
    }
};

export const fetchEmployees = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "employees"));
        const employees = [];

        querySnapshot.forEach((doc) => {
            employees.push({ id: doc.id, ...doc.data() });
        });


        dispatch({ type: 'FETCH_EMPLOYEES', payload: employees });
    } catch (error) {
        console.error("Error fetching employees: ", error);
    }
};
