package org.firstSpring.FirstSpring.Controllers;

import org.firstSpring.FirstSpring.Models.DatabaseModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HelloController {

    @GetMapping("he")
    public String home(){
        DatabaseModel a = new DatabaseModel();
        try {
            a.testConnection();
            return"hel2lo";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //return "gd";

    }
}