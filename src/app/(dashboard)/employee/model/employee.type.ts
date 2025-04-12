export interface IEmployee {
  name : string;
  citizen_id : string;
  place_of_birth : string;
  date_of_birth : string;
  address : string;
  phone_number : string;
  whatsapp_number : string;
  working_area : string;
  department : string;
  status : string;
  tmt : string;
  kta_number : string;
  npwp_number : string;
  bpjs_number : string;
  bank_provider : string;
  bank_account_number : string;
  bank_account_name : string;
  rt : string;
  rw : string;
  marital_status : string;
  religion : string;
  group : string;
}

export const dummyEmployee: IEmployee[] = [
  {
    name: "John Smith",
    citizen_id: "3173012504880001",
    place_of_birth: "Jakarta",
    date_of_birth: "1988-04-25",
    address: "Jl. Sudirman No. 123",
    phone_number: "081234567890",
    whatsapp_number: "081234567890",
    working_area: "Jakarta Pusat",
    department: "IT",
    status: "Permanent",
    tmt: "2020-01-01",
    kta_number: "KTA123456",
    npwp_number: "98.765.432.1-123.000",
    bpjs_number: "0001234567890",
    bank_provider: "BCA",
    bank_account_number: "1234567890",
    bank_account_name: "John Smith",
    rt: "001",
    rw: "002",
    marital_status: "Married",
    religion: "Islam",
    group: "Staff"
  },
  {
    name: "Sarah Johnson",
    citizen_id: "3173012504900002",
    place_of_birth: "Bandung",
    date_of_birth: "1990-06-15",
    address: "Jl. Gatot Subroto No. 45",
    phone_number: "081234567891",
    whatsapp_number: "081234567891",
    working_area: "Jakarta Selatan",
    department: "HR",
    status: "Contract",
    tmt: "2021-03-01",
    kta_number: "KTA123457",
    npwp_number: "98.765.432.2-123.000",
    bpjs_number: "0001234567891",
    bank_provider: "Mandiri",
    bank_account_number: "0987654321",
    bank_account_name: "Sarah Johnson",
    rt: "003",
    rw: "004",
    marital_status: "Single",
    religion: "Christian",
    group: "Manager"
  },
  {
    name: "Ahmad Rahman",
    citizen_id: "3173012504950003",
    place_of_birth: "Surabaya",
    date_of_birth: "1995-08-10",
    address: "Jl. Thamrin No. 67",
    phone_number: "081234567892",
    whatsapp_number: "081234567892",
    working_area: "Jakarta Barat",
    department: "Finance",
    status: "Permanent",
    tmt: "2022-06-01",
    kta_number: "KTA123458",
    npwp_number: "98.765.432.3-123.000",
    bpjs_number: "0001234567892",
    bank_provider: "BNI",
    bank_account_number: "1122334455",
    bank_account_name: "Ahmad Rahman",
    rt: "005",
    rw: "006",
    marital_status: "Married",
    religion: "Islam",
    group: "Staff"
  },
  {
    name: "Maria Chen",
    citizen_id: "3173012504920004",
    place_of_birth: "Medan",
    date_of_birth: "1992-12-20",
    address: "Jl. Asia Afrika No. 89",
    phone_number: "081234567893",
    whatsapp_number: "081234567893",
    working_area: "Jakarta Timur",
    department: "Marketing",
    status: "Contract",
    tmt: "2023-01-01",
    kta_number: "KTA123459",
    npwp_number: "98.765.432.4-123.000",
    bpjs_number: "0001234567893",
    bank_provider: "BRI",
    bank_account_number: "2233445566",
    bank_account_name: "Maria Chen",
    rt: "007",
    rw: "008",
    marital_status: "Single",
    religion: "Catholic",
    group: "Staff"
  },
  {
    name: "Budi Santoso",
    citizen_id: "3173012504870005",
    place_of_birth: "Semarang",
    date_of_birth: "1987-03-30",
    address: "Jl. Hayam Wuruk No. 234",
    phone_number: "081234567894",
    whatsapp_number: "081234567894",
    working_area: "Jakarta Utara",
    department: "Operations",
    status: "Permanent",
    tmt: "2019-09-01",
    kta_number: "KTA123460",
    npwp_number: "98.765.432.5-123.000",
    bpjs_number: "0001234567894",
    bank_provider: "CIMB",
    bank_account_number: "3344556677",
    bank_account_name: "Budi Santoso",
    rt: "009",
    rw: "010",
    marital_status: "Married",
    religion: "Islam",
    group: "Supervisor"
  }
] 