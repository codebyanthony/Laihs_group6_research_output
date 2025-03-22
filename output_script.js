// Function to send the message
function sendMessage() {
    let input = document.getElementById("userInput").value.trim().toLowerCase();
    if (input === "") return;
    
    let chatbox = document.getElementById("chatbox");
    let userMessage = `<p class="message user-message">${input}</p>`;
    chatbox.innerHTML += userMessage;

    let solutions = {
        // Hardware Issues
        "slow pc": "Try clearing temporary files, upgrading RAM, or using an SSD for better speed.",
        "computer won't turn on": "Check power cables, battery, and try a different power outlet.",
        "cpu overheating": "Clean the cooling fan, apply new thermal paste, and improve airflow.",
        "gpu not detected": "Check PCIe connection, update drivers, and test with another PC.",
        "ram issues": "Reseat the RAM sticks, clean the slots, and try one stick at a time.",
        "no display": "Check if RAM is properly seated and verify HDMI connectivity.",
        "keyboard not working": "Try a different USB port, clean the keys, or check for stuck keys.",
        "mouse not working": "Replace batteries (if wireless), test another port, or try another mouse.",
        "printer not responding": "Check connections, restart printer, and reinstall printer drivers.",
        "monitor no display": "Check cable connections, test with another monitor, or reset display settings.",
        "projector not connecting": "Ensure correct input is selected and update display drivers.",
        "hard drive not detected": "Check cables, test with another port, and try a different SATA cable.",
        "power supply failure": "Test with another PSU, check for burning smell or faulty cables.",
        "usb device not recognized": "Update USB drivers, try a different port, or check for hardware issues.",
        "laptop battery not charging": "Check the power adapter, replace the battery, or reset the power management settings.",
        "fan making noise": "Clean the fan, check for obstructions, or replace the fan if necessary.",
        "motherboard not working": "Check for physical damage, test with minimal components, or replace the motherboard.",
        "bluetooth not working": "Enable Bluetooth in settings, update drivers, or restart the device.",
        "speakers no sound": "Check audio settings, ensure speakers are connected, and update audio drivers.",
        "cd/dvd drive not working": "Check connections, update drivers, or replace the drive.",
        "network card not working": "Reinstall drivers, check for hardware issues, or replace the network card.",
        "bios not loading": "Reset BIOS settings, update BIOS firmware, or replace the CMOS battery.",
        "laptop screen flickering": "Check display cables, update graphics drivers, or replace the screen.",
        "external hard drive not detected": "Check USB port, update drivers, or format the drive.",
        "overheating laptop": "Clean the vents, use a cooling pad, or reapply thermal paste.",

        // Software Issues
        "windows won't boot": "Boot into Safe Mode, run startup repair, or reinstall Windows.",
        "application crashes": "Update the software, check for compatibility, and reinstall if needed.",
        "drivers not working": "Update or reinstall drivers from Device Manager.",
        "virus detected": "Run a full antivirus scan and remove threats.",
        "windows update stuck": "Restart your PC, use Windows Update Troubleshooter, or reset update components.",
        "system freezing": "Check for overheating, update drivers, and scan for malware.",
        "no internet": "Restart your router, check Wi-Fi settings, or reset network settings.",
        "slow internet": "Move closer to the router, clear cache, and disable background downloads.",
        "ethernet not working": "Check cables, update network drivers, and reset the network adapter.",
        "wifi not connecting": "Forget the network and reconnect, restart the router, and check for IP conflicts.",
        "dns issues": "Use Google DNS (8.8.8.8, 8.8.4.4) or flush DNS cache using 'ipconfig /flushdns'.",
        "blue screen errors": "Check for hardware issues, update drivers, or perform a system restore.",
        "sound not working": "Check audio settings, update drivers, or test with another audio device.",
        "files missing or corrupted": "Use data recovery software or restore from a backup.",
        "antivirus issues": "Update the antivirus software, run a full scan, or reinstall the software.",
        "firewall blocking app": "Allow the app through Windows Firewall or disable temporarily.",
        "data recovery": "Use recovery software like Recuva, or restore from a backup.",
        "backup files": "Use cloud services or external drives for automatic backups.",
        "system restore": "Use Windows System Restore to roll back to a working state.",
        "forgot password": "Use password reset options or boot into recovery mode.",
        "software not installing": "Check system requirements, disable antivirus temporarily, or run as administrator.",
        "windows activation issues": "Enter a valid product key, troubleshoot activation, or contact Microsoft support.",
        "task manager not opening": "Scan for malware, restart the system, or repair Windows system files.",
        "file explorer not responding": "Restart File Explorer, update Windows, or scan for malware.",
        "start menu not working": "Restart the system, update Windows, or run the Start Menu troubleshooter.",
        "windows search not working": "Restart Windows Search service, rebuild the search index, or update Windows.",
        "print spooler not working": "Restart the Print Spooler service, clear the print queue, or update drivers.",
        "remote desktop not working": "Enable Remote Desktop in settings, check network connectivity, or update Windows.",
        "virtual machine not starting": "Check virtualization settings in BIOS, update virtualization software, or allocate more resources.",
        "email not syncing": "Check internet connection, update email settings, or re-add the email account.",
        "browser not loading pages": "Clear cache, disable extensions, or reset browser settings.",
        "cloud storage not syncing": "Check internet connection, update the cloud app, or re-login to the account.",
        "software licensing issues": "Re-enter the license key, contact the software vendor, or use an alternative activation method.",
        "operating system not found": "Check boot order in BIOS, repair the bootloader, or reinstall the OS.",
        "grub rescue error": "Rebuild the GRUB bootloader, check disk partitions, or reinstall the OS.",
        "linux not booting": "Boot into recovery mode, repair filesystem, or reinstall Linux.",
        "macos not starting": "Boot into Safe Mode, run Disk Utility, or reinstall macOS.",
        "android not connecting to pc": "Enable USB debugging, update drivers, or use a different USB cable.",
        "ios not syncing with itunes": "Update iTunes, restart the device, or check USB connection.",
        "virtual private network (vpn) not working": "Check VPN settings, update VPN software, or restart the device.",
        "dual boot issues": "Repair the bootloader, check disk partitions, or reinstall the OS.",
        "bios password forgotten": "Reset the CMOS battery, use a BIOS password reset tool, or contact the manufacturer.",
        "uefi boot issues": "Check boot order, disable Secure Boot, or update UEFI firmware.",
        "raid array not detected": "Check RAID controller, rebuild the array, or replace faulty drives.",
        "ssd not recognized": "Check connections, update firmware, or initialize the SSD in Disk Management.",
        "hdd making noise": "Backup data immediately, check for physical damage, or replace the hard drive.",
        "optical drive not reading discs": "Clean the lens, update drivers, or replace the drive.",
        "touchscreen not working": "Calibrate the touchscreen, update drivers, or restart the device.",
        "webcam not working": "Check privacy settings, update drivers, or test with another application.",
        "microphone not working": "Check audio settings, update drivers, or test with another microphone.",
        "headphones not working": "Check if muted, test on another device, and update audio drivers.",
        "bios settings reset": "Replace the CMOS battery, update BIOS firmware, or reset BIOS settings.",
        "firmware update failed": "Restart the device, reflash the firmware, or contact the manufacturer.",
        "smartphone not charging": "Check the charging port, replace the cable, or restart the device.",
        "tablet not turning on": "Charge the device, perform a hard reset, or contact the manufacturer.",
        "smartwatch not syncing": "Restart the smartwatch, update the companion app, or reset the device.",
        "iot device not connecting": "Check Wi-Fi settings, update firmware, or restart the device.",
        "nas not accessible": "Check network settings, restart the NAS, or update firmware.",
        "router not working": "Restart the router, update firmware, or reset to factory settings.",
        "modem not connecting": "Check cables, update firmware, or contact your ISP.",
        "ip conflict": "Release and renew IP address, restart the router, or assign a static IP.",
        "port forwarding not working": "Check router settings, update firmware, or test with another device.",
        "network printer not working": "Check network settings, update drivers, or restart the printer.",
        "email not sending": "Check SMTP settings, update email client, or contact your email provider.",
        "email not receiving": "Check IMAP/POP settings, update email client, or contact your email provider.",
        "cloud backup failed": "Check internet connection, update backup software, or free up storage space.",
        "database connection issues": "Check credentials, update database software, or restart the server.",
        "server not responding": "Check network connectivity, restart the server, or update server software.",
        "website not loading": "Check DNS settings, clear browser cache, or contact the hosting provider.",
        "ssl certificate issues": "Renew the SSL certificate, update server settings, or contact the certificate provider.",
        "domain not resolving": "Check DNS settings, update domain records, or contact your domain registrar.",
        "ftp not connecting": "Check credentials, update FTP client, or restart the FTP server.",
        "ssh not working": "Check SSH settings, update SSH client, or restart the SSH service.",
        "vpn not connecting": "Check VPN settings, update VPN client, or restart the VPN service.",
        "firewall blocking traffic": "Allow traffic in firewall settings, update firewall rules, or disable temporarily.",
        "intrusion detection system (ids) alerts": "Investigate alerts, update IDS rules, or contact your security team.",
        "data breach": "Isolate affected systems, change passwords, and contact your security team.",
        "ransomware attack": "Disconnect from the network, restore from backup, and contact cybersecurity experts.",
        "phishing attack": "Change passwords, enable two-factor authentication, and educate users.",
        "malware infection": "Run a full antivirus scan, remove threats, and update security software.",
        "zero-day exploit": "Apply security patches, isolate affected systems, and contact your security team.",
        "ddos attack": "Enable DDoS protection, block malicious traffic, and contact your ISP.",
        "brute force attack": "Change passwords, enable account lockout policies, and monitor logs.",
        "social engineering attack": "Educate users, implement security policies, and monitor for suspicious activity.",
        "insider threat": "Monitor user activity, implement access controls, and conduct security audits.",
        "data loss": "Use data recovery software, restore from backup, and implement data loss prevention policies.",
        "data corruption": "Use data recovery software, restore from backup, and investigate the cause.",
        "data leakage": "Implement data loss prevention policies, monitor network traffic, and educate users.",
        "data privacy violation": "Investigate the violation, notify affected parties, and implement privacy policies.",
        "compliance issues": "Review compliance requirements, implement policies, and conduct audits.",
        "software vulnerabilities": "Apply security patches, update software, and monitor for vulnerabilities.",
        "hardware vulnerabilities": "Update firmware, replace vulnerable hardware, and monitor for vulnerabilities.",
        "cloud security issues": "Implement cloud security policies, monitor cloud activity, and update cloud software.",
        "endpoint security issues": "Update endpoint security software, monitor endpoints, and educate users.",
        "network security issues": "Implement network security policies, monitor network traffic, and update network devices.",
        "application security issues": "Update application software, monitor application activity, and educate developers.",
        "iot security issues": "Update IoT firmware, monitor IoT devices, and implement IoT security policies.",
        "ai security issues": "Monitor AI systems, update AI software, and implement AI security policies.",
        "blockchain security issues": "Monitor blockchain activity, update blockchain software, and implement blockchain security policies.",
        "quantum computing security issues": "Monitor quantum computing systems, update quantum software, and implement quantum security policies.",
        "cybersecurity training": "Conduct regular training, educate users, and implement security policies.",
        "incident response": "Develop an incident response plan, train staff, and conduct drills.",
        "disaster recovery": "Develop a disaster recovery plan, test the plan, and update regularly.",
        "business continuity": "Develop a business continuity plan, test the plan, and update regularly.",
        "risk management": "Identify risks, assess risks, and implement risk mitigation strategies.",
        "security audits": "Conduct regular audits, implement audit findings, and monitor compliance.",
        "penetration testing": "Conduct regular penetration tests, implement findings, and monitor for vulnerabilities.",
        "security awareness": "Educate users, implement security policies, and monitor for suspicious activity.",
        "security policies": "Develop security policies, implement policies, and monitor compliance.",
        "security tools": "Implement security tools, update tools, and monitor for vulnerabilities.",
        "security monitoring": "Monitor systems, analyze logs, and respond to incidents.",
        "security incident management": "Develop an incident management plan, train staff, and conduct drills.",
        "security operations center (soc)": "Monitor systems, analyze logs, and respond to incidents.",
        "threat intelligence": "Monitor threats, analyze threats, and implement threat mitigation strategies.",
        "vulnerability management": "Monitor vulnerabilities, analyze vulnerabilities, and implement vulnerability mitigation strategies.",
        "security information and event management (siem)": "Monitor systems, analyze logs, and respond to incidents.",
        "identity and access management (iam)": "Implement IAM policies, monitor access, and update IAM software.",
        "data encryption": "Implement encryption policies, monitor encryption, and update encryption software.",
        "data masking": "Implement data masking policies, monitor data masking, and update data masking software.",
        "data tokenization": "Implement tokenization policies, monitor tokenization, and update tokenization software.",
        "data anonymization": "Implement anonymization policies, monitor anonymization, and update anonymization software.",
        "data governance": "Implement data governance policies, monitor data governance, and update data governance software.",
        "data quality": "Implement data quality policies, monitor data quality, and update data quality software.",
        "data integration": "Implement data integration policies, monitor data integration, and update data integration software.",
        "data warehousing": "Implement data warehousing policies, monitor data warehousing, and update data warehousing software.",
        "data analytics": "Implement data analytics policies, monitor data analytics, and update data analytics software.",
        "data visualization": "Implement data visualization policies, monitor data visualization, and update data visualization software.",
        "data science": "Implement data science policies, monitor data science, and update data science software.",
        "machine learning": "Implement machine learning policies, monitor machine learning, and update machine learning software.",
        "artificial intelligence": "Implement AI policies, monitor AI, and update AI software.",
        "deep learning": "Implement deep learning policies, monitor deep learning, and update deep learning software.",
        "natural language processing": "Implement NLP policies, monitor NLP, and update NLP software.",
        "computer vision": "Implement computer vision policies, monitor computer vision, and update computer vision software.",
        "robotics": "Implement robotics policies, monitor robotics, and update robotics software.",
        "internet of things": "Implement IoT policies, monitor IoT, and update IoT software.",
        "blockchain": "Implement blockchain policies, monitor blockchain, and update blockchain software.",
        "quantum computing": "Implement quantum computing policies, monitor quantum computing, and update quantum computing software.",
        "cloud computing": "Implement cloud computing policies, monitor cloud computing, and update cloud computing software.",
        "edge computing": "Implement edge computing policies, monitor edge computing, and update edge computing software.",
        "fog computing": "Implement fog computing policies, monitor fog computing, and update fog computing software.",
        "grid computing": "Implement grid computing policies, monitor grid computing, and update grid computing software.",
        "distributed computing": "Implement distributed computing policies, monitor distributed computing, and update distributed computing software.",
        "parallel computing": "Implement parallel computing policies, monitor parallel computing, and update parallel computing software.",
        "high-performance computing": "Implement HPC policies, monitor HPC, and update HPC software.",
        "supercomputing": "Implement supercomputing policies, monitor supercomputing, and update supercomputing software.",
        "green computing": "Implement green computing policies, monitor green computing, and update green computing software.",
        "sustainable computing": "Implement sustainable computing policies, monitor sustainable computing, and update sustainable computing software.",
        "ethical computing": "Implement ethical computing policies, monitor ethical computing, and update ethical computing software.",
        "responsible computing": "Implement responsible computing policies, monitor responsible computing, and update responsible computing software.",
        "secure computing": "Implement secure computing policies, monitor secure computing, and update secure computing software.",
        "trusted computing": "Implement trusted computing policies, monitor trusted computing, and update trusted computing software.",
        "resilient computing": "Implement resilient computing policies, monitor resilient computing, and update resilient computing software.",
        "autonomous computing": "Implement autonomous computing policies, monitor autonomous computing, and update autonomous computing software.",
        "self-healing computing": "Implement self-healing computing policies, monitor self-healing computing, and update self-healing computing software.",
        "self-organizing computing": "Implement self-organizing computing policies, monitor self-organizing computing, and update self-organizing computing software.",
        "self-optimizing computing": "Implement self-optimizing computing policies, monitor self-optimizing computing, and update self-optimizing computing software.",
        "self-protecting computing": "Implement self-protecting computing policies, monitor self-protecting computing, and update self-protecting computing software.",
        "self-aware computing": "Implement self-aware computing policies, monitor self-aware computing, and update self-aware computing software.",
        "cognitive computing": "Implement cognitive computing policies, monitor cognitive computing, and update cognitive computing software."
    };

    let response = "I'm not sure. Try restarting your device, checking connections, or searching online for more solutions.";
    for (let key in solutions) {
        if (input.includes(key)) {
            response = solutions[key];
            break;
        }
    }

    // Show typing animation
    let typingMessage = `<p class="message typing">AI is typing...</p>`;
    chatbox.innerHTML += typingMessage;
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        // Remove typing animation and show response
        chatbox.querySelector('.typing').remove();
        chatbox.innerHTML += `<p class="message">${response}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);

    document.getElementById("userInput").value = "";
    document.getElementById("suggestions").innerHTML = ""; // Clear suggestions after sending
}

// Function to handle Enter key press
function handleEnterKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to show auto-suggestions
function showSuggestions() {
    let input = document.getElementById("userInput").value.trim().toLowerCase();
    let suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    if (input === "") {
        suggestionsDiv.style.display = "none";
        return;
    }

    let solutions = {
        // Hardware Issues
        "slow pc": "Try clearing temporary files, upgrading RAM, or using an SSD for better speed.",
        "computer won't turn on": "Check power cables, battery, and try a different power outlet.",
        "cpu overheating": "Clean the cooling fan, apply new thermal paste, and improve airflow.",
        "gpu not detected": "Check PCIe connection, update drivers, and test with another PC.",
        "ram issues": "Reseat the RAM sticks, clean the slots, and try one stick at a time.",
        "no display": "Check if RAM is properly seated and verify HDMI connectivity.",
        "keyboard not working": "Try a different USB port, clean the keys, or check for stuck keys.",
        "mouse not working": "Replace batteries (if wireless), test another port, or try another mouse.",
        "printer not responding": "Check connections, restart printer, and reinstall printer drivers.",
        "monitor no display": "Check cable connections, test with another monitor, or reset display settings.",
        "projector not connecting": "Ensure correct input is selected and update display drivers.",
        "hard drive not detected": "Check cables, test with another port, and try a different SATA cable.",
        "power supply failure": "Test with another PSU, check for burning smell or faulty cables.",
        "usb device not recognized": "Update USB drivers, try a different port, or check for hardware issues.",
        "laptop battery not charging": "Check the power adapter, replace the battery, or reset the power management settings.",
        "fan making noise": "Clean the fan, check for obstructions, or replace the fan if necessary.",
        "motherboard not working": "Check for physical damage, test with minimal components, or replace the motherboard.",
        "bluetooth not working": "Enable Bluetooth in settings, update drivers, or restart the device.",
        "speakers no sound": "Check audio settings, ensure speakers are connected, and update audio drivers.",
        "cd/dvd drive not working": "Check connections, update drivers, or replace the drive.",
        "network card not working": "Reinstall drivers, check for hardware issues, or replace the network card.",
        "bios not loading": "Reset BIOS settings, update BIOS firmware, or replace the CMOS battery.",
        "laptop screen flickering": "Check display cables, update graphics drivers, or replace the screen.",
        "external hard drive not detected": "Check USB port, update drivers, or format the drive.",
        "overheating laptop": "Clean the vents, use a cooling pad, or reapply thermal paste.",
        "touchpad not working": "Check touchpad settings, update drivers, or restart the device.",
        "webcam not working": "Check privacy settings, update drivers, or test with another application.",
        "microphone not working": "Check audio settings, update drivers, or test with another microphone.",
        "headphones not working": "Check if muted, test on another device, and update audio drivers.",
        "bios settings reset": "Replace the CMOS battery, update BIOS firmware, or reset BIOS settings.",
        "firmware update failed": "Restart the device, reflash the firmware, or contact the manufacturer.",
        "smartphone not charging": "Check the charging port, replace the cable, or restart the device.",
        "tablet not turning on": "Charge the device, perform a hard reset, or contact the manufacturer.",
        "smartwatch not syncing": "Restart the smartwatch, update the companion app, or reset the device.",
        "iot device not connecting": "Check Wi-Fi settings, update firmware, or restart the device.",
        "nas not accessible": "Check network settings, restart the NAS, or update firmware.",
        "router not working": "Restart the router, update firmware, or reset to factory settings.",
        "modem not connecting": "Check cables, update firmware, or contact your ISP.",
        "ip conflict": "Release and renew IP address, restart the router, or assign a static IP.",
        "port forwarding not working": "Check router settings, update firmware, or test with another device.",
        "network printer not working": "Check network settings, update drivers, or restart the printer.",
        "email not sending": "Check SMTP settings, update email client, or contact your email provider.",
        "email not receiving": "Check IMAP/POP settings, update email client, or contact your email provider.",
        "cloud backup failed": "Check internet connection, update backup software, or free up storage space.",
        "database connection issues": "Check credentials, update database software, or restart the server.",
        "server not responding": "Check network connectivity, restart the server, or update server software.",
        "website not loading": "Check DNS settings, clear browser cache, or contact the hosting provider.",
        "ssl certificate issues": "Renew the SSL certificate, update server settings, or contact the certificate provider.",
        "domain not resolving": "Check DNS settings, update domain records, or contact your domain registrar.",
        "ftp not connecting": "Check credentials, update FTP client, or restart the FTP server.",
        "ssh not working": "Check SSH settings, update SSH client, or restart the SSH service.",
        "vpn not connecting": "Check VPN settings, update VPN client, or restart the VPN service.",
        "firewall blocking traffic": "Allow traffic in firewall settings, update firewall rules, or disable temporarily.",
        "intrusion detection system (ids) alerts": "Investigate alerts, update IDS rules, or contact your security team.",
        "data breach": "Isolate affected systems, change passwords, and contact your security team.",
        "ransomware attack": "Disconnect from the network, restore from backup, and contact cybersecurity experts.",
        "phishing attack": "Change passwords, enable two-factor authentication, and educate users.",
        "malware infection": "Run a full antivirus scan, remove threats, and update security software.",
        "zero-day exploit": "Apply security patches, isolate affected systems, and contact your security team.",
        "ddos attack": "Enable DDoS protection, block malicious traffic, and contact your ISP.",
        "brute force attack": "Change passwords, enable account lockout policies, and monitor logs.",
        "social engineering attack": "Educate users, implement security policies, and monitor for suspicious activity.",
        "insider threat": "Monitor user activity, implement access controls, and conduct security audits.",
        "data loss": "Use data recovery software, restore from backup, and implement data loss prevention policies.",
        "data corruption": "Use data recovery software, restore from backup, and investigate the cause.",
        "data leakage": "Implement data loss prevention policies, monitor network traffic, and educate users.",
        "data privacy violation": "Investigate the violation, notify affected parties, and implement privacy policies.",
        "compliance issues": "Review compliance requirements, implement policies, and conduct audits.",
        "software vulnerabilities": "Apply security patches, update software, and monitor for vulnerabilities.",
        "hardware vulnerabilities": "Update firmware, replace vulnerable hardware, and monitor for vulnerabilities.",
        "cloud security issues": "Implement cloud security policies, monitor cloud activity, and update cloud software.",
        "endpoint security issues": "Update endpoint security software, monitor endpoints, and educate users.",
        "network security issues": "Implement network security policies, monitor network traffic, and update network devices.",
        "application security issues": "Update application software, monitor application activity, and educate developers.",
        "iot security issues": "Update IoT firmware, monitor IoT devices, and implement IoT security policies.",
        "ai security issues": "Monitor AI systems, update AI software, and implement AI security policies.",
        "blockchain security issues": "Monitor blockchain activity, update blockchain software, and implement blockchain security policies.",
        "quantum computing security issues": "Monitor quantum computing systems, update quantum software, and implement quantum security policies.",
        "cybersecurity training": "Conduct regular training, educate users, and implement security policies.",
        "incident response": "Develop an incident response plan, train staff, and conduct drills.",
        "disaster recovery": "Develop a disaster recovery plan, test the plan, and update regularly.",
        "business continuity": "Develop a business continuity plan, test the plan, and update regularly.",
        "risk management": "Identify risks, assess risks, and implement risk mitigation strategies.",
        "security audits": "Conduct regular audits, implement audit findings, and monitor compliance.",
        "penetration testing": "Conduct regular penetration tests, implement findings, and monitor for vulnerabilities.",
        "security awareness": "Educate users, implement security policies, and monitor for suspicious activity.",
        "security policies": "Develop security policies, implement policies, and monitor compliance.",
        "security tools": "Implement security tools, update tools, and monitor for vulnerabilities.",
        "security monitoring": "Monitor systems, analyze logs, and respond to incidents.",
        "security incident management": "Develop an incident management plan, train staff, and conduct drills.",
        "security operations center (soc)": "Monitor systems, analyze logs, and respond to incidents.",
        "threat intelligence": "Monitor threats, analyze threats, and implement threat mitigation strategies.",
        "vulnerability management": "Monitor vulnerabilities, analyze vulnerabilities, and implement vulnerability mitigation strategies.",
        "security information and event management (siem)": "Monitor systems, analyze logs, and respond to incidents.",
        "identity and access management (iam)": "Implement IAM policies, monitor access, and update IAM software.",
        "data encryption": "Implement encryption policies, monitor encryption, and update encryption software.",
        "data masking": "Implement data masking policies, monitor data masking, and update data masking software.",
        "data tokenization": "Implement tokenization policies, monitor tokenization, and update tokenization software.",
        "data anonymization": "Implement anonymization policies, monitor anonymization, and update anonymization software.",
        "data governance": "Implement data governance policies, monitor data governance, and update data governance software.",
        "data quality": "Implement data quality policies, monitor data quality, and update data quality software.",
        "data integration": "Implement data integration policies, monitor data integration, and update data integration software.",
        "data warehousing": "Implement data warehousing policies, monitor data warehousing, and update data warehousing software.",
        "data analytics": "Implement data analytics policies, monitor data analytics, and update data analytics software.",
        "data visualization": "Implement data visualization policies, monitor data visualization, and update data visualization software.",
        "data science": "Implement data science policies, monitor data science, and update data science software.",
        "machine learning": "Implement machine learning policies, monitor machine learning, and update machine learning software.",
        "artificial intelligence": "Implement AI policies, monitor AI, and update AI software.",
        "deep learning": "Implement deep learning policies, monitor deep learning, and update deep learning software.",
        "natural language processing": "Implement NLP policies, monitor NLP, and update NLP software.",
        "computer vision": "Implement computer vision policies, monitor computer vision, and update computer vision software.",
        "robotics": "Implement robotics policies, monitor robotics, and update robotics software.",
        "internet of things": "Implement IoT policies, monitor IoT, and update IoT software.",
        "blockchain": "Implement blockchain policies, monitor blockchain, and update blockchain software.",
        "quantum computing": "Implement quantum computing policies, monitor quantum computing, and update quantum computing software.",
        "cloud computing": "Implement cloud computing policies, monitor cloud computing, and update cloud computing software.",
        "edge computing": "Implement edge computing policies, monitor edge computing, and update edge computing software.",
        "fog computing": "Implement fog computing policies, monitor fog computing, and update fog computing software.",
        "grid computing": "Implement grid computing policies, monitor grid computing, and update grid computing software.",
        "distributed computing": "Implement distributed computing policies, monitor distributed computing, and update distributed computing software.",
        "parallel computing": "Implement parallel computing policies, monitor parallel computing, and update parallel computing software.",
        "high-performance computing": "Implement HPC policies, monitor HPC, and update HPC software.",
        "supercomputing": "Implement supercomputing policies, monitor supercomputing, and update supercomputing software.",
        "green computing": "Implement green computing policies, monitor green computing, and update green computing software.",
        "sustainable computing": "Implement sustainable computing policies, monitor sustainable computing, and update sustainable computing software.",
        "ethical computing": "Implement ethical computing policies, monitor ethical computing, and update ethical computing software.",
        "responsible computing": "Implement responsible computing policies, monitor responsible computing, and update responsible computing software.",
        "secure computing": "Implement secure computing policies, monitor secure computing, and update secure computing software.",
        "trusted computing": "Implement trusted computing policies, monitor trusted computing, and update trusted computing software.",
        "resilient computing": "Implement resilient computing policies, monitor resilient computing, and update resilient computing software.",
        "autonomous computing": "Implement autonomous computing policies, monitor autonomous computing, and update autonomous computing software.",
        "self-healing computing": "Implement self-healing computing policies, monitor self-healing computing, and update self-healing computing software.",
        "self-organizing computing": "Implement self-organizing computing policies, monitor self-organizing computing, and update self-organizing computing software.",
        "self-optimizing computing": "Implement self-optimizing computing policies, monitor self-optimizing computing, and update self-optimizing computing software.",
        "self-protecting computing": "Implement self-protecting computing policies, monitor self-protecting computing, and update self-protecting computing software.",
        "self-aware computing": "Implement self-aware computing policies, monitor self-aware computing, and update self-aware computing software.",
        "cognitive computing": "Implement cognitive computing policies, monitor cognitive computing, and update cognitive computing software."
    };

    let matches = Object.keys(solutions).filter(key => key.includes(input));
    if (matches.length > 0) {
        matches.forEach(match => {
            suggestionsDiv.innerHTML += `<div class="suggestion-item" onclick="selectSuggestion('${match}')">${match}</div>`;
        });
        suggestionsDiv.style.display = "block";
    } else {
        suggestionsDiv.style.display = "none";
    } 
}

// Function to select a suggestion
function selectSuggestion(suggestion) {
    document.getElementById("userInput").value = suggestion;
    document.getElementById("suggestions").innerHTML = ""; // Clear suggestions
}

// Attach event listener to the input field
document.getElementById("userInput").addEventListener("input", showSuggestions);
document.getElementById("userInput").addEventListener("keypress", handleEnterKey);

// Function to reset the chat
function resetChat() {
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML = `<p class="message">👋 Hi! What IT issue are you facing?</p>`;
}

// Other functions (unchanged)
function toggleSection(section) {
    let sections = document.querySelectorAll('.troubleshoot-section');
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(section).style.display = "block";
}

function toggleFAQ(num) {
    let answer = document.getElementById("faq" + num);
    answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}