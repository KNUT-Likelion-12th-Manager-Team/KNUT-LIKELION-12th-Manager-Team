package org.LLManagement.Controllers;


import org.LLManagement.Models.AttendanceManager;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {
    @GetMapping("hello")
    public String home(){
        AttendanceManager llContent = new AttendanceManager();
        //llContent.AttendanceChecking(123);
        if(llContent.AttendanceChecked(123, 20240324))
            System.out.println("gd");
        return"hel2lo";
    }
}
