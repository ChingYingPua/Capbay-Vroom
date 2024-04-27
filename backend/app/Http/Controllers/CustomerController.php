<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Customer;
class CustomerController extends Controller
{
    protected $customer;
    public function __construct(){
        $this->customer = new Customer();
        
    }
    public function index()
    {
        return $this->customer->all();
     
    }
    
    public function store(Request $request)
    {
     return $this->customer->create($request->all());
    
       
    }
  
    public function show(string $id)
    {
     $customer = $this->customer->find($id);  
    }

    public function update(Request $request, string $id)
    {
         $customer = $this->customer->find($id);
         $customer->update($request->all());
         return $customer;
    }
    public function destroy(string $id)
    {
     $customer = $this->customer->find($id);
    return $customer->delete();   
    }
}