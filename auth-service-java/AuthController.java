package com.nexora.auth;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class AuthController {
    @GetMapping("/check")
    public Map<String, String> check() {
        Map<String, String> map = new HashMap<>();
        map.put("status", "Authenticated via Java Spring Boot");
        return map;
    }
}