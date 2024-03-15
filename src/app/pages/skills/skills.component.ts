import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  filteredSkills: Skill[] = [];
  searchValue: string = '';
  selectedCategory: string = 'All';
  categories: string[] = []; // Array to hold unique categories

  constructor(private skillService: SkillService) { }
  
  ngOnInit(): void {
    this.getSkillData();
  }

  getSkillData(): void {
    this.skillService.getSkillData()
      .subscribe((data: Skill[]) => {
        this.skills = data;
        this.extractCategories(); // Extract unique categories
        this.applyFilter(); // Apply initial filter
      });
  }

  extractCategories(): void {
    // Extract unique categories from skills data
    this.categories = Array.from(new Set(this.skills.map(skill => skill.type)));
  }

  applyFilter(): void {
    this.filteredSkills = this.skills.filter(skill => {
      const isMatched = (
        (skill.name.toLowerCase().includes(this.searchValue.toLowerCase()) || this.searchValue === '') &&
        (skill.type === this.selectedCategory || this.selectedCategory === 'All')
      );
      return isMatched;
    });
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  onSelectCategory(): void {
    this.applyFilter();
  }

  getProficiencyLevels(level: number): boolean[] {
    return Array.from({ length: 5 }, (_, index) => index < level);
  }

}
