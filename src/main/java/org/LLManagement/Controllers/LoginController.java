package org.LLManagement.Controllers;

import org.LLManagement.Models.LoginDAO;
import org.LLManagement.Models.LoginVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
    @Autowired
    private LoginDAO loginDAO;
    @PostMapping("/login2")
    public String login(@RequestParam("userName") String username, @RequestParam("userPassword") String userpassword) {

        LoginVO loginVO = loginDAO.login(Integer.parseInt(username), Integer.parseInt(userpassword));
        if(loginVO != null)
            System.out.println("로그인 성공: " + loginVO.getName());
        else 
            System.out.println("로그인 실패");
        return "index";
    }
}
