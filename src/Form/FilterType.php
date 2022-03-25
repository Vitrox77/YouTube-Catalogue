<?php

namespace App\Form;

use App\Entity\Filters;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('min_likes')
            ->add('max_likes')
            ->add('min_views')
            ->add('max_views')
            ->add('min_dislikes')
            ->add('max_dislikes')
            ->add('min_duration')
            ->add('max_duration')
            ->add('min_uploadDate', DateType::class, [
                'widget' => 'single_text',
                    'html5' => false,
                    'attr' => ['class' => 'js-datepicker'],
            ])
            ->add('max_uploadDate', DateType::class, [
                'widget' => 'single_text',
                    'html5' => false,
                    'attr' => ['class' => 'js-datepicker'],
            ])
            ->add('has_subtitles')
            ->add('has_ageLimit')
            ->add('keywords')
            ->add('category')
            ->add('tags')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Filters::class,
        ]);
    }
}
