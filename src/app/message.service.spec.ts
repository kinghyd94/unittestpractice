import { getTestBed, TestBed } from "@angular/core/testing"
import { MessageService } from "./message.service";
import{HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing"

describe('messageService',()=>{
    let injector:TestBed;
    let service:MessageService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[MessageService]
        });
        injector=getTestBed();
        service=injector.get(MessageService);
        httpMock=injector.get(HttpTestingController);
        
    })
    afterEach(()=>{
        httpMock.verify();
    }
    )

    // it('To check the data in the json file',()=>{
    //    const dummyUsers=[{"login": "pjhyett"}]
    //     service.getUsers().subscribe(users => {

    //         expect(users).toBe(dummyUsers)
    //     })
    //     const req = httpMock.expectOne(`${service.API_URL}/users`);
    //     expect(req.request.method).toBe("GET");
    //     req.flush(dummyUsers);  
    //   })
  
  

})