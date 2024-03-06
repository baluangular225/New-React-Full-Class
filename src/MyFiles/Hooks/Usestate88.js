import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Loader from '../../images/Loading-img.gif';

const Usesatet88 = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchApi = async (apiUrl) => {
        setLoading(true);
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setList(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleDelete = (id) => {
        const delteItem = list.filter((item)=>{
            return item.id !== id
        })
        setList(delteItem)
    }

    const handleEdit = (id, name, email, website, address) => {
        setEditId(id);
        setName(name);
        setEmail(email);
        setWebsite(website);
        setAddress(address);
        setShowForm(true);
    }

    const handleUpdate = () => {
        const updatedList = list.map((item) => {
            if (item.id === editId) {
                return {
                    ...item,
                    name: name,
                    email: email,
                    website: website,
                    address: { ...item.address, city: address }
                };
            }
            return item;
        });
        setEditId(null);
        setName('');
        setEmail('');
        setWebsite('');
        setAddress('');
        setList(updatedList);
        setShowForm(false);
    }

    useEffect(() => {
        fetchApi(URL);
    }, []);

    const filteredList = list.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <h3 className="text-center"><img src={Loader} alt="Loading" /></h3>;
    }

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <h3>useState88 Component</h3>
                {showForm && (
                    <div className="shadow p-3 mt-3 mb-3">
                        <h4 className="mb-3">Update form Data</h4>
                        <input type="text" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <input type="email" className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="text" className="form-control mb-2" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" />
                        <input type="text" className="form-control mb-2" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                        <input type="submit" className="btn btn-primary mb-2" onClick={handleUpdate} value="Update" />
                    </div>
                )}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <input type="text" className="form-control" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by name" />
                    </div>
                </div>
                <div className="row mt-4">
                    {filteredList.map((item) => (
                        <div key={item.id} className="col-md-4 col-sm-12">
                            <div className="shadow p-3 mb-3">
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.website}</p>
                                <p>{item.address.city}</p>
                                <div className="d-grid gap-0 d-md-flex justify-content-md-end">
                                    <button className="btn btn-danger rounded-0" onClick={() => handleDelete(item.id)}>Delete</button>
                                    <button className="btn btn-info rounded-0" onClick={() => handleEdit(item.id, item.name, item.email, item.website, item.address.city)}>Edit</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Usesatet88;
